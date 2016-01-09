/**
 * Created by Rob on 1/8/2016.
 */
//region Pattern Parsers
var validate = {
    'getGeneral': function (type, res) {
        var responseCollection = {
            'function-declarations': true,
            'conditionals': true,
            'global-object-access': true,
            'single-var': true,
            'hoisting': true,
            'for-loop': true,
            'for-in-loop': true,
            'augment-built-in-prototypes': true,
            'switch': true,
            'implied-typecasting': true,
            'eval': true,
            'number-conversion': true,
            'globals': true,
            'uncompromisable': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getJQueryGeneral': function (type, res) {
        var responseCollection = {
            'requery': true,
            'append': true,
            'data': true,
            'context': true,
            'detach': true,
            'event-delegation': true,
            'selector-cache': true,
            'window-scroll-event': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getJQuerySelector': function (type, res) {
        var responseCollection = {
            'left-and-right': true,
            'decending-from-id': true,
            'universal-selector': true,
            'be-specific': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getJQueryPublishSubscribe': function (type, res) {
        var responseCollection = {
            'custom-events': true,
            'using-callbacks': true,
            'using-observable': true,
            'using-plugins': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getJQueryPlugin': function (type, res) {
        var responseCollection = {
            'basic': true,
            'extend': true,
            'lightweight': true,
            'namespaced': true,
            'prototypal': true,
            'best-options': true,
            'custom-events': true,
            'highly-configurable': true,
            'ui-widget-factory': true,
            'ui-widget-factory-bridge': true,
            'ui-widget-factory-mobile': true,
            'universal-module': true,
            'ui-widget-requireJS module': true,
            'universal-module': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getLiteralsConstructors': function (type, res) {
        var responseCollection = {
            'object-literal': true,
            'enforcing-new': true,
            'array-literal': true,
            'json': true,
            'primitive-wrapper': true,
            'regular-expression': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getFunctions': function (type, res) {
        var responseCollection = {
            'api-patterns': true,
            'initialization-patterns': true,
            'performance-patterns': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getApi': function (type, res) {
        var responseCollection = {
            'callback': true,
            'configuration': true,
            'returning': true,
            'currying': true,
            'partial': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getInitialization': function (type, res) {
        var responseCollection = {
            'immediate': true,
            'immediate-object': true,
            'init-time-branch': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getPerformance': function (type, res) {
        var responseCollection = {
            'memorization': true,
            'self-defining': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getObjectCreation': function (type, res) {
        var responseCollection = {
            'declaring-dependencies': true,
            'private-properties': true,
            'namespace': true,
            'revelation': true,
            'module': true,
            'sandbox': true,
            'static-members': true,
            'object-constants': true,
            'chaining-pattern': true,
            'method-method': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getCodeReuse': function (type, res) {
        var responseCollection = {
            'classical': true,
            'preferred': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getCodeReuseClassical': function (type, res) {
        var responseCollection = {
            'default': true,
            'rent-a-constructor': true,
            'rent-and-set-prototype': true,
            'share': true,
            'temporary-constructor': true,
            'class': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getCodeReusePreferred': function (type, res) {
        var responseCollection = {
            'prototypal': true,
            'inheritance': true,
            'mix-ins': true,
            'borrowing': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getDesign': function (type, res) {
        var responseCollection = {
            'creational': true,
            'structural': true,
            'behavioral': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getDesignCreational': function (type, res) {
        var responseCollection = {
            'builder': true,
            'factory': true,
            'singleton': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getDesignStructural': function (type, res) {
        var responseCollection = {
            'decorator': true,
            'facade': true,
            'proxy': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    },
    'getDesignBehavioral': function (type, res) {
        var responseCollection = {
            'chain': true,
            'command': true,
            'iterator': true,
            'mediator': true,
            'observer': true,
            'strategy': true,
            'error': false
        };
        return (responseCollection[type] || responseCollection['error']);
    }
}
module.exports = validate;
//endregion