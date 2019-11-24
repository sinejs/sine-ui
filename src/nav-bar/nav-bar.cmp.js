import template from './nav-bar.html';

var defaults = {
    color: 'light',
};

@sine.decorator.component({
    namespace: 'sine.ui',
    selector: 'n-nav-bar',
    template: template
})
class NavBarComponent extends sine.Component {
    constructor() {
        super();
        this.brand = {};
        this.items = [];
        this.navOptions = {
            insideBar: true,
        };
        this.options = {};
        this.settings = {};
        this.css = {};
    }

    onInit() {
        this.settings = sine.merge(defaults, this.options);

        this.css = {
            nav: sine.format('navbar-{0} bg-{0}', this.settings.color)
        };
    }

    toggle(content) {
        var element = content.htmlElement;

        if (element.classList.contains('show')) {
            element.classList.remove('show');
        }
        else {
            element.classList.add('show');
        }
    }
}