'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">kaz documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-86aa95ed40e59a7801c9c8e644b401d0"' : 'data-target="#xs-components-links-module-AppModule-86aa95ed40e59a7801c9c8e644b401d0"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-86aa95ed40e59a7801c9c8e644b401d0"' : 'id="xs-components-links-module-AppModule-86aa95ed40e59a7801c9c8e644b401d0"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AtosModule.html" data-type="entity-link">AtosModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AtosModule-b292ad9fbd9af4342a437660e176f0b5"' : 'data-target="#xs-components-links-module-AtosModule-b292ad9fbd9af4342a437660e176f0b5"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AtosModule-b292ad9fbd9af4342a437660e176f0b5"' : 'id="xs-components-links-module-AtosModule-b292ad9fbd9af4342a437660e176f0b5"' }>
                                        <li class="link">
                                            <a href="components/AtosAvatarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtosAvatarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AtosIconButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtosIconButtonComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AtosPseudoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtosPseudoComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AtosTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtosTextComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-AtosModule-b292ad9fbd9af4342a437660e176f0b5"' : 'data-target="#xs-directives-links-module-AtosModule-b292ad9fbd9af4342a437660e176f0b5"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-AtosModule-b292ad9fbd9af4342a437660e176f0b5"' : 'id="xs-directives-links-module-AtosModule-b292ad9fbd9af4342a437660e176f0b5"' }>
                                        <li class="link">
                                            <a href="directives/AtosSizeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtosSizeDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AtosStatusDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtosStatusDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/MainModule.html" data-type="entity-link">MainModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-MainModule-fdddfaf18b4d2c9737a18a932d6e124d"' : 'data-target="#xs-components-links-module-MainModule-fdddfaf18b4d2c9737a18a932d6e124d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-MainModule-fdddfaf18b4d2c9737a18a932d6e124d"' : 'id="xs-components-links-module-MainModule-fdddfaf18b4d2c9737a18a932d6e124d"' }>
                                        <li class="link">
                                            <a href="components/MainChatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainChatComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MainChatListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainChatListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MainChatListItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainChatListItemComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MainEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainEditComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MainHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainHeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MainStatusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainStatusComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MainStatusListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainStatusListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MainStatusListItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainStatusListItemComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/MenuModule.html" data-type="entity-link">MenuModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-MenuModule-9af178036d71c054c63cf7e72859c738"' : 'data-target="#xs-components-links-module-MenuModule-9af178036d71c054c63cf7e72859c738"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-MenuModule-9af178036d71c054c63cf7e72859c738"' : 'id="xs-components-links-module-MenuModule-9af178036d71c054c63cf7e72859c738"' }>
                                        <li class="link">
                                            <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MenuContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuContentComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MenuFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuFooterComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MenuHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuHeaderComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/ChannelsService.html" data-type="entity-link">ChannelsService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MessagesService.html" data-type="entity-link">MessagesService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UsersService.html" data-type="entity-link">UsersService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
