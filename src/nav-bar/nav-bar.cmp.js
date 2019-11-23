import template from './nav-bar.html';

@sine.decorator.component({
    namespace: 'sine.ui',
    selector: 'n-nav-bar',
    template: template,
    inject: {
        $router: '$router'
    }
})
class NavBarComponent extends sine.Component {
    constructor() {
        super();
        this.brand = {
            label: 'Sine',
            url: '#'
        };
        this.items = [
            {
                label: 'Home',
                active: false,
                disable: false,
                path: 'home'
            },
            {
                label: 'Document',
                active: true,
                disable: false,
                path: 'docu'
            },
            {
                label: 'Component',
                active: false,
                disable: false,
                path: 'component'
            }
        ];
    }
}