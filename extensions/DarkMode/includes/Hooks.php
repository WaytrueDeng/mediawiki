<?php

namespace MediaWiki\Extension\DarkMode;

use Config;
use ContextSource;
use Html;
use IContextSource;
use MediaWiki\Hook\BeforePageDisplayHook;
use MediaWiki\Hook\PersonalUrlsHook;
use MediaWiki\Hook\SkinAddFooterLinksHook;
use MediaWiki\Hook\SkinBuildSidebarHook;
use MediaWiki\Preferences\Hook\GetPreferencesHook;
use MediaWiki\User\UserOptionsLookup;
use OutputPage;
use Skin;
use SkinTemplate;
use Title;
use User;

class Hooks implements
	SkinAddFooterLinksHook,
	PersonalUrlsHook,
	SkinBuildSidebarHook,
	BeforePageDisplayHook,
	GetPreferencesHook
{

	public const POSITION_FOOTER = 'footer';
	public const POSITION_PERSONAL = 'personal';
	public const POSITION_SIDEBAR = 'sidebar';
	public const TOGGLE_POSITIONS = [
		self::POSITION_FOOTER => 'footer',
		self::POSITION_PERSONAL => 'personal',
		self::POSITION_SIDEBAR => 'sidebar',
	];

	/** @var string */
	public const CSS_CLASS = 'darkmode-link';

	/** @var string */
	private $linkPosition;

	/** @var UserOptionsLookup */
	private $userOptionsLookup;

	/**
	 * @param Config $options
	 * @param UserOptionsLookup $userOptionsLookup
	 */
	public function __construct(
		Config $options,
		UserOptionsLookup $userOptionsLookup
	) {
		$this->linkPosition = $options->get( 'DarkModeTogglePosition' );
		$this->userOptionsLookup = $userOptionsLookup;
	}

	/**
	 * Handler for SkinAddFooterLinks hook.
	 * Add a "Dark mode" item to the footer if DarkModeTogglePosition is set to 'footer'.
	 *
	 * @param Skin $skin Skin being used.
	 * @param string $key Current position in the footer.
	 * @param array &$footerItems Array of URLs to add to.
	 */
	public function onSkinAddFooterLinks( Skin $skin, string $key, array &$footerItems ) {
		if ( !self::shouldHaveDarkMode( $skin ) || $this->linkPosition !== self::POSITION_FOOTER ) {
			return;
		}

		if ( $key === 'places' ) {
			$footerItems['darkmode-toggle'] = Html::element(
				'a',
				[ 'href' => '#', 'class' => self::CSS_CLASS ],
				$this->getMessageText( $skin )
			);
		}
	}

	/**
	 * Handler for PersonalUrls hook.
	 * Add a "Dark mode" item to the personal links (usually at the top),
	 *   if DarkModeTogglePosition is set to 'personal'.
	 *
	 * @param array &$personal_urls
	 * @param Title &$title
	 * @param SkinTemplate $skin
	 */
	public function onPersonalUrls( &$personal_urls, &$title, $skin ): void {
		if ( !self::shouldHaveDarkMode( $skin ) || $this->linkPosition !== self::POSITION_PERSONAL ) {
			return;
		}

		$insertUrls = [
			'darkmode-toggle' => [
				'text' => $this->getMessageText( $skin ),
				'href' => '#',
				'class' => self::CSS_CLASS,
				'active' => false,
			]
		];

		if ( array_key_exists( 'mytalk', $personal_urls ) ) {
			$after = 'mytalk';
		} elseif ( array_key_exists( 'anontalk', $personal_urls ) ) {
			$after = 'anontalk';
		} else {
			$after = false;
			$personal_urls += $insertUrls;
		}

		if ( $after ) {
			$personal_urls = wfArrayInsertAfter( $personal_urls, $insertUrls, $after );
		}
	}

	/**
	 * Handler for SkinBuildSidebar hook.
	 * Add a "Dark mode" item to the sidebar in the navigation portlet menu,
	 *   if DarkModeTogglePosition is set to 'sidebar'.
	 *
	 * @param SkinTemplate $skin
	 * @param array &$bar
	 */
	public function onSkinBuildSidebar( $skin, &$bar ) {
		if ( !self::shouldHaveDarkMode( $skin ) || $this->linkPosition !== self::POSITION_SIDEBAR ) {
			return;
		}

		$bar['navigation'][] = [
			'text' => $this->getMessageText( $skin ),
			'href' => '#',
			'class' => self::CSS_CLASS,
		];
	}

	/**
	 * Handler for BeforePageDisplay hook.
	 *
	 * @param OutputPage $out
	 * @param Skin $skin Skin being used.
	 */
	public function onBeforePageDisplay( $out, $skin ): void {
		if ( !self::shouldHaveDarkMode( $skin ) ) {
			return;
		}

		$out->addModules( 'ext.DarkMode' );
		$out->addModuleStyles( 'ext.DarkMode.styles' );

		if ( $this->isDarkModeActive( $skin ) ) {
			$out->addBodyClasses( 'client-dark-mode' );
		}
	}

	/**
	 * Handler for GetPreferences hook
	 * Add hidden preference to keep dark mode turned on all pages
	 *
	 * @param User $user Current user
	 * @param array &$preferences
	 */
	public function onGetPreferences( $user, &$preferences ) {
		$preferences['darkmode'] = [
			'type' => 'api',
			'default' => 0,
		];
	}

	/**
	 * Conditions for when Dark Mode should be available.
	 * @param Skin $skin
	 * @return bool
	 */
	private static function shouldHaveDarkMode( Skin $skin ): bool {
		return $skin->getSkinName() !== 'minerva';
	}

	/**
	 * Is the Dark Mode active?
	 *
	 * @param IContextSource $context
	 * @return bool
	 */
	private function isDarkModeActive( IContextSource $context ): bool {
		$var = $context->getRequest()->getRawVal( 'usedarkmode' );
		if ( $var === '0' || $var === '1' ) {
			// On usedarkmode=0 or usedarkmode=1 overwrite the user setting.
			return (bool)$var;
		}
		// On no parameter use the user setting.
		return $this->userOptionsLookup->getBoolOption( $context->getUser(), 'darkmode' );
	}

	/**
	 * Get the initial message text for the dark mode toggle button.
	 *
	 * @param ContextSource $context
	 * @return string
	 */
	private function getMessageText( ContextSource $context ): string {
		return $context->msg( $this->isDarkModeActive( $context )
			? 'darkmode-default-link'
			: 'darkmode-link'
		)->text();
	}

}
