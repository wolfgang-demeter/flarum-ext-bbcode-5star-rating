<?php

namespace WD\BBCode\FiveStarRating;

use Flarum\Extend;
use s9e\TextFormatter\Configurator;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),
    (new Extend\Formatter)
        ->configure(function (Configurator $config) {
            $config->BBcodes->addCustom(
                '[FIVESTAR rating={RANGE=0,10}]',
                '<span class="bbcode-fivestar-rating">
                    <xsl:choose>
                        <xsl:when test="@rating=\'0\'"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></xsl:when>
                        <xsl:when test="@rating=\'1\'"><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></xsl:when>
                        <xsl:when test="@rating=\'2\'"><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></xsl:when>
                        <xsl:when test="@rating=\'3\'"><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></xsl:when>
                        <xsl:when test="@rating=\'4\'"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></xsl:when>
                        <xsl:when test="@rating=\'5\'"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i></xsl:when>
                        <xsl:when test="@rating=\'6\'"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></xsl:when>
                        <xsl:when test="@rating=\'7\'"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i></xsl:when>
                        <xsl:when test="@rating=\'8\'"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></xsl:when>
                        <xsl:when test="@rating=\'9\'"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></xsl:when>
                        <xsl:when test="@rating=\'10\'"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></xsl:when>
                        <xsl:otherwise><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></xsl:otherwise>
                    </xsl:choose>
                </span>'
            );
        })
];
