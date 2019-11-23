import { ModalComponent } from './modal.cmp';

@sine.decorator.service({
    namespace: 'sine.ui',
    selector: 'modalService'
})
class ModalService extends sine.Service {
    constructor() {
        super();
    }

    show(content) {
        new ModalComponent().show(content);
    }
}