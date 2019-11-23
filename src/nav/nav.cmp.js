import template from './nav.html';

@sine.decorator.component({
    namespace: 'sine.ui',
    selector: 'n-nav',
    template: template,
    inject: {
        $router: '$router'
    }
})
class NavComponent extends sine.Component {
    constructor() {
        super();
        this.items = [];
        this.options = {
            flexColumn: false,
            insideBar: false
        };
    }

    onInit() {
        var self = this;

        this.items.some(function (item) {
            if (item.active) {
                self.navigate(item);
                return true;
            }
        });
    }

    navigate(item) {
        if (item.path) {
            this.$router.navigate(item.path);
        }
        else {
            item.execute && item.execute();
        }

        this.updateActive(item);
    }

    updateActive(item) {
        this.items.forEach(function (item2) {
            item2.toProxy().active = false;
        });

        item.toProxy().active = true;
    }
}