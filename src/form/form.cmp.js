import template from './form.html';

@sine.decorator.component({
    namespace: 'sine.ui',
    selector: 'n-form',
    template: template
})
class FormComponent extends sine.Component {
    constructor() {
        super();
        this.entity = null;
        this.config = {
            groups: [],
            validator: {}
        };
    }

    toggle(group) {
        var proxy = group.toProxy();
        proxy.collapsed = !group.collapsed;
    }

    isValid(item) {
        if (this[item.field] != null) {
            return this[item.field].$valid;
        }

        return true;
    }

    getFeedback(item) {
        if (this[item.field] != null) {
            return this[item.field].$feedback;
        }

        return null;
    }
}