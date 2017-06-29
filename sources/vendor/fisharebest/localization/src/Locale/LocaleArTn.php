<?php namespace Fisharebest\Localization\Locale;

use Fisharebest\Localization\Territory\TerritoryTn;

/**
 * Class LocaleArTn
 *
 * @author        Greg Roach <fisharebest@gmail.com>
 * @copyright (c) 2015 Greg Roach
 * @license       GPLv3+
 */
class LocaleArTn extends LocaleAr {
	public function numberSymbols() {
		return array(
			self::GROUP    => self::DOT,
			self::DECIMAL  => self::COMMA,
			self::NEGATIVE => self::LTR_MARK . self::HYPHEN,
		);
	}

	public function territory() {
		return new TerritoryTn;
	}
}