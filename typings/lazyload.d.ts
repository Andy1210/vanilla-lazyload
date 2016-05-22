﻿interface ILazyLoadOptions {
    threshold?: number;
    container?: HTMLElement;
    elements_selector?: string;
    throttle?: number;
    data_src?: string;
    class_loading?: string;
    class_loaded?: string;
    skip_invisible?: string;
    data_srcset?: string;
    show_while_loading?: boolean;
    callback_set?: (elt:HTMLImageElement) => void;
    callback_load?: (elt:HTMLImageElement) => void;
    callback_processed?: (elts:HTMLImageElement[]) => void;
    placeholder?: string;
}
interface ILazyLoad {
    new (options?: ILazyLoadOptions);
    update();
    destroy();
    handleScroll();
}
declare var LazyLoad: ILazyLoad;