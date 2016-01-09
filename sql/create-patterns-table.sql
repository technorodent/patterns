CREATE TABLE patterns (
    family VARCHAR(25) CHARACTER SET utf8,
    oGroup VARCHAR(24) CHARACTER SET utf8,
    route_a VARCHAR(26) CHARACTER SET utf8,
    route_b VARCHAR(27) CHARACTER SET utf8,
    pattern VARCHAR(35) CHARACTER SET utf8,
    group_id NUMERIC(2, 1),
    subgroup_id NUMERIC(3, 1),
    x_pos NUMERIC(3, 1),
    y_pos NUMERIC(2, 1),
    slug_1 INT,
    slug_2 VARCHAR(114) CHARACTER SET utf8,
    gist VARCHAR(84) CHARACTER SET utf8,
    abbreviation VARCHAR(3) CHARACTER SET utf8
);
INSERT INTO patterns VALUES ('General Patterns','General Patterns','/general-patterns/','global-object-access ','Global Object Access',1.0,1.0,1.0,1.0,NULL,'access the global object without hard-coding the identifier window','','GoA');
INSERT INTO patterns VALUES ('General Patterns','General Patterns','/general-patterns/','augment-built-in-prototypes','Augmenting Built-in Prototypes',1.0,1.0,1.0,2.0,NULL,'only augment built-in prototypes when certain conditions are met','','AuP');
INSERT INTO patterns VALUES ('General Patterns','General Patterns','/general-patterns/','eval','Eval',1.0,1.0,1.0,3.0,NULL,'avoid using eval()','','Ev');
INSERT INTO patterns VALUES ('General Patterns','General Patterns','/general-patterns/','conditionals','Conditionals',1.0,1.0,1.0,4.0,NULL,'pattern and antipattern of using if else','','Co');
INSERT INTO patterns VALUES ('General Patterns','General Patterns','/general-patterns/','for-loop','For Loop',1.0,1.0,1.0,5.0,NULL,'optimized for loops','','Fl');
INSERT INTO patterns VALUES ('General Patterns','General Patterns','/general-patterns/','for-in-loop','For-In Loop',1.0,1.0,1.0,6.0,NULL,'optimized for-in loops','','Fil');
INSERT INTO patterns VALUES ('General Patterns','General Patterns','/general-patterns/','function-declarations','Function Declarations',1.0,1.0,1.0,7.0,NULL,'creating anonymous functions and assigning them to a variable','','Fd');
INSERT INTO patterns VALUES ('General Patterns','General Patterns','/general-patterns/','globals','Globals',1.0,1.0,2.0,1.0,NULL,'various problems with globals','','Gl');
INSERT INTO patterns VALUES ('General Patterns','General Patterns','/general-patterns/','hoisting','Hoisting',1.0,1.0,2.0,2.0,NULL,'var statements anywhere in a function act as if the variables were declared at the top of the function','','Hoi');
INSERT INTO patterns VALUES ('General Patterns','General Patterns','/general-patterns/','implied-typecasting','Implied Typecasting',1.0,1.0,2.0,3.0,NULL,'avoid implied typecasting','','It');
INSERT INTO patterns VALUES ('General Patterns','General Patterns','/general-patterns/','globals','Minimizing Globals',1.0,1.0,2.0,4.0,NULL,'create and access a global variable in a browser environment','','Mg');
INSERT INTO patterns VALUES ('General Patterns','General Patterns','/general-patterns/','number-conversion','Number Conversions with parseInt()',1.0,1.0,2.0,5.0,NULL,'use the second radix parameter','','Nc');
INSERT INTO patterns VALUES ('General Patterns','General Patterns','/general-patterns/','single-var','Single Var',1.0,1.0,2.0,6.0,NULL,'use one var statement and declare multiple variables','','Sv');
INSERT INTO patterns VALUES ('General Patterns','General Patterns','/general-patterns/','switch','Switch',1.0,1.0,2.0,7.0,NULL,'improve the readability and robustness of your switch statements','','Sw');
INSERT INTO patterns VALUES ('Function Patterns','Performance Patterns','/functions/performance/','memorization','Memorization',2.0,2.0,3.0,4.0,NULL,'use function properties to avoid repeated computation','','Mem');
INSERT INTO patterns VALUES ('Function Patterns','Performance Patterns','/functions/performance/','self-defining','Self-defining functions',2.0,2.0,3.0,5.0,NULL,'self-overwrite with new bodies to do less work from the second invocation and after','','Sdf');
INSERT INTO patterns VALUES ('Function Patterns','Initialization Patterns','/functions/initialization/','immediate','Immediate functions',2.0,3.0,4.0,3.0,NULL,'syntax that enables function execution as soon as it is defined','','If');
INSERT INTO patterns VALUES ('Function Patterns','Initialization Patterns','/functions/initialization/','immediate-object','Immediate object initialization',2.0,3.0,4.0,4.0,NULL,'this pattern is mainly suitable for one-off tasks','','Ioi');
INSERT INTO patterns VALUES ('Function Patterns','Initialization Patterns','/functions/initialization/','init-time-branch','Init-time branching',2.0,3.0,4.0,5.0,NULL,'branch code once during initlization initialization','','Itb');
INSERT INTO patterns VALUES ('Function Patterns','API Patterns','/functions/api/','callback','Callback',2.0,4.0,5.0,1.0,NULL,'when you pass function A to function B as a parameter, function A is a callback function','','Ca');
INSERT INTO patterns VALUES ('Function Patterns','API Patterns','/functions/api/','configuration','Configuration objects',2.0,4.0,5.0,2.0,NULL,'keep control of function arguments and makes it easily configurable','','Cfg');
INSERT INTO patterns VALUES ('Function Patterns','API Patterns','/functions/api/','currying','Currying',2.0,4.0,5.0,3.0,NULL,'used to create new functions dynamically by partially applying a set of arguments','','Cu');
INSERT INTO patterns VALUES ('Function Patterns','API Patterns','/functions/api/','partial','Partial application',2.0,4.0,5.0,4.0,NULL,'the process of fixing a number of arguments to a function, producing another function of smaller arity','','Pa');
INSERT INTO patterns VALUES ('Function Patterns','API Patterns','/functions/api/','returning','Returning functions',2.0,4.0,5.0,5.0,NULL,'one function returns another function or create another function on-demand','','Rf');
INSERT INTO patterns VALUES ('Design Patterns','Creational','/design/creational/','builder','Builder',3.0,5.0,6.0,3.0,NULL,'constructs complex objects by separating construction and representation','','Bu');
INSERT INTO patterns VALUES ('Design Patterns','Creational','/design/creational/','factory','Factory',3.0,5.0,6.0,4.0,NULL,'creates objects without specifying the exact class to create','','Fa');
INSERT INTO patterns VALUES ('Design Patterns','Creational','/design/creational/','singleton','Singleton',3.0,5.0,6.0,5.0,NULL,'restricts object creation for a class to only one instance','','Si');
INSERT INTO patterns VALUES ('Design Patterns','Structural','/design/structural/','decorator','Decorator',3.0,6.0,7.0,3.0,NULL,'dynamically adds/overrides behaviour in an existing method of an object','','Dec');
INSERT INTO patterns VALUES ('Design Patterns','Structural','/design/structural/','facade','Facade',3.0,6.0,7.0,4.0,NULL,'provides a simplified interface to a large body of code','','Fac');
INSERT INTO patterns VALUES ('Design Patterns','Structural','/design/structural/','proxy','Proxy',3.0,6.0,7.0,5.0,NULL,'provides a placeholder for another object to control access, reduce cost, and reduce complexity','','Prx');
INSERT INTO patterns VALUES ('Design Patterns','Behavioral','/design/structural/','command','Command',3.0,7.0,8.0,2.0,NULL,'creates objects which encapsulate actions and parameters','','Cmd');
INSERT INTO patterns VALUES ('Design Patterns','Behavioral','/design/structural/','iterator','Iterator',3.0,7.0,8.0,3.0,NULL,'implements a specialized language','','Itr');
INSERT INTO patterns VALUES ('Design Patterns','Behavioral','/design/structural/','mediator','Mediator',3.0,7.0,8.0,4.0,NULL,'allows loose coupling between classes by being the only class that has detailed knowledge of their methods','','Med');
INSERT INTO patterns VALUES ('Design Patterns','Behavioral','/design/structural/','observer','Observer',3.0,7.0,8.0,5.0,NULL,'is a publish/subscribe pattern which allows a number of observer objects to see an event','','Obs');
INSERT INTO patterns VALUES ('Design Patterns','Behavioral','/design/structural/','chain','Responsibility Chain',3.0,7.0,8.0,6.0,NULL,'delegates commands to a chain of processing objects','','Rch');
INSERT INTO patterns VALUES ('Design Patterns','Behavioral','/design/structural/','strategy','Strategy',3.0,7.0,8.0,7.0,NULL,'allows one of a family of algorithms to be selected on-the-fly at runtime','','Str');
INSERT INTO patterns VALUES ('Code Reuse','Classical','/code-reuse/classical/','class','Class',4.0,8.0,9.0,2.0,NULL,'generally a pattern that should be avoided unless one is more comfortable with class than prototype','','Cls');
INSERT INTO patterns VALUES ('Code Reuse','Classical','/code-reuse/classical/','default','Default',4.0,8.0,9.0,3.0,NULL,'create an object using the Parent() constructor and assign this object to the Child()''s prototype','','Def');
INSERT INTO patterns VALUES ('Code Reuse','Classical','/code-reuse/classical/','rent-a-constructor','Rent a constructor',4.0,8.0,9.0,4.0,NULL,'it borrows the parent constructor, passing the child object to be bound to this and also forwarding any arguments','','Rac');
INSERT INTO patterns VALUES ('Code Reuse','Classical','/code-reuse/classical/','rent-and-set-prototype','Rent and Set Prototype',4.0,8.0,9.0,5.0,NULL,'restricts object creation for a class to only one instance','','Rsp');
INSERT INTO patterns VALUES ('Code Reuse','Classical','/code-reuse/classical/','share','Share the Prototype',4.0,8.0,9.0,6.0,NULL,'restricts object creation for a class to only one instance','','Shp');
INSERT INTO patterns VALUES ('Code Reuse','Classical','/code-reuse/classical/','temporary-constructor','Temporary Constructor',4.0,8.0,9.0,7.0,NULL,'first borrow the constructor and then also set the child''s prototype to point to a new instance of the constructor','','Tmp');
INSERT INTO patterns VALUES ('Code Reuse','Preferred','/code-reuse/preferred/','borrowing','Borrowing Methods',4.0,9.0,10.0,2.0,NULL,'reuse one or two methods of an existing object without forming a parent-child relationship with that object','','Brm');
INSERT INTO patterns VALUES ('Code Reuse','Preferred','/code-reuse/preferred/','inheritance','Inheritance by Copying Properties',4.0,9.0,10.0,3.0,NULL,'an object gets functionality from another object, simply by copying it','','Icp');
INSERT INTO patterns VALUES ('Code Reuse','Preferred','/code-reuse/preferred/','mix-ins','Mix-ins',4.0,9.0,10.0,4.0,NULL,'copy from any number of objects and mix them all into a new object','','Mxi');
INSERT INTO patterns VALUES ('Code Reuse','Preferred','/code-reuse/preferred/','prototypal','Prototypal Inheritance',4.0,9.0,10.0,5.0,NULL,'objects inherit from other objects','','Pri');
INSERT INTO patterns VALUES ('Object Creation','Object Creation','/object-creation/','chaining-pattern','Chaining Pattern',5.0,10.0,11.0,1.0,NULL,'it enables you to call methods on an object one after the other','','Chp');
INSERT INTO patterns VALUES ('Object Creation','Object Creation','/object-creation/','declaring-dependencies','Declared Dependencies',5.0,10.0,11.0,2.0,NULL,'it''s good to declare the modules your code relies on at the top','','Dcd');
INSERT INTO patterns VALUES ('Object Creation','Object Creation','/object-creation/','method-method','Method Method',5.0,10.0,11.0,3.0,NULL,'adding convenient funcationality to a language','','Mm');
INSERT INTO patterns VALUES ('Object Creation','Object Creation','/object-creation/','module','Module Pattern',5.0,10.0,11.0,4.0,NULL,'all the methods are kept private and you only expose those that you decide at the end','','Mp');
INSERT INTO patterns VALUES ('Object Creation','Object Creation','/object-creation/','namespace','Namespace',5.0,10.0,11.0,5.0,NULL,'namespaces help reduce the number of globals required and avoid naming collisions or excessive name prefixing','','Nme');
INSERT INTO patterns VALUES ('Object Creation','Object Creation','/object-creation/','object-constants','Object Constants',5.0,10.0,12.0,1.0,NULL,'an implementation of a contant object provides set, inDefined and get methods','','Ocn');
INSERT INTO patterns VALUES ('Object Creation','Object Creation','/object-creation/','private-properties','Private Properties and Methods',5.0,10.0,12.0,2.0,NULL,'JavaScript doesn''t have special syntax for private members, you can implement them using a closure','','Ppm');
INSERT INTO patterns VALUES ('Object Creation','Object Creation','/object-creation/','revelation','Revelation Pattern',5.0,10.0,12.0,3.0,NULL,'it is about having private methods, which you also expose as public methods','','Rvp');
INSERT INTO patterns VALUES ('Object Creation','Object Creation','/object-creation/','sandbox','Sandbox',5.0,10.0,12.0,4.0,NULL,'it provides an environment for the modules to work without affecting other modules and their personal sandboxes','','Snd');
INSERT INTO patterns VALUES ('Object Creation','Object Creation','/object-creation/','static-members','Static Members',5.0,10.0,12.0,5.0,NULL,'public and private static members','','Stm');
INSERT INTO patterns VALUES ('Literals and Constructors','Literals and Contructors','/literals-constructors/','array-literal','Array literal',6.0,11.0,13.0,2.0,NULL,'use array literal notation to avoid potential errors when creating dynamic arrays at runtime','','Arl');
INSERT INTO patterns VALUES ('Literals and Constructors','Literals and Contructors','/literals-constructors/','json','JSON',6.0,11.0,13.0,3.0,NULL,'use library from JSON.org, YUI, jQuery instead of eval for parsing','','JSN');
INSERT INTO patterns VALUES ('Literals and Constructors','Literals and Contructors','/literals-constructors/','enforcing-new','New Enforcement',6.0,11.0,13.0,4.0,NULL,'when you forget `new`, `this` inside the constructor will point to the global object','','Nef');
INSERT INTO patterns VALUES ('Literals and Constructors','Literals and Contructors','/literals-constructors/','object-literal','Object Literal',6.0,11.0,13.0,5.0,NULL,'use the simpler and reliable object literal instead of new Object();','','Obl');
INSERT INTO patterns VALUES ('Literals and Constructors','Literals and Contructors','/literals-constructors/','primitive-wrapper','Primitive Wrappers',6.0,11.0,13.0,6.0,NULL,'try to use the primitive without wrapper','','Prw');
INSERT INTO patterns VALUES ('Literals and Constructors','Literals and Contructors','/literals-constructors/','regular-expression','Regular Expression Literal',6.0,11.0,13.0,7.0,NULL,'try to use the shorter literal notation','','Rel');
INSERT INTO patterns VALUES ('jQuery','General','/jquery/general/','append','append',7.0,12.0,14.0,2.0,NULL,'use string concatenate and set innerHTML','','App');
INSERT INTO patterns VALUES ('jQuery','General','/jquery/general/','context','context and find',7.0,12.0,14.0,3.0,NULL,'use find over context','','Caf');
INSERT INTO patterns VALUES ('jQuery','General','/jquery/general/','data','data',7.0,12.0,14.0,4.0,NULL,'pattern and antipattern of using data','','Dat');
INSERT INTO patterns VALUES ('jQuery','General','/jquery/general/','detach','detach',7.0,12.0,14.0,5.0,NULL,'take element off the DOM while manipulating them','','Det');
INSERT INTO patterns VALUES ('jQuery','General','/jquery/general/','event-delegation','event delegation',7.0,12.0,15.0,2.0,NULL,'event delegation pattern and antipattern','','Evd');
INSERT INTO patterns VALUES ('jQuery','General','/jquery/general/','requery','requery',7.0,12.0,15.0,3.0,NULL,'avoid requery by using jQuery chaining','','Req');
INSERT INTO patterns VALUES ('jQuery','General','/jquery/general/','selector-cache','selector cache',7.0,12.0,15.0,4.0,NULL,'using selector cache to avoid requery','','Slc');
INSERT INTO patterns VALUES ('jQuery','General','/jquery/general/','window-scroll-event','window scroll event',7.0,12.0,15.0,5.0,NULL,'avoid attaching handlers to the window scroll event','','Wse');
INSERT INTO patterns VALUES ('jQuery','Selector','/jquery/selector/','be-specific','Be Specific when Needed',7.0,13.0,16.0,2.0,NULL,'be specific only when needed','','Bes');
INSERT INTO patterns VALUES ('jQuery','Selector','/jquery/selector/','decending-from-id','Decending from id',7.0,13.0,16.0,3.0,NULL,'be more specific','','Dfi');
INSERT INTO patterns VALUES ('jQuery','Selector','/jquery/selector/','left-and-right','Left and Right',7.0,13.0,16.0,4.0,NULL,'specific on the right, light on the left','','Lar');
INSERT INTO patterns VALUES ('jQuery','Selector','/jquery/selector/','universal-selector','Universal Selector',7.0,13.0,16.0,5.0,NULL,'use of universal selector','','Us');
INSERT INTO patterns VALUES ('jQuery','Publish Subscribe','/jquery/publish-subscribe/','custom-events','Method 1',7.0,14.0,17.0,2.0,NULL,'custom events using .on() and .off()','','M1');
INSERT INTO patterns VALUES ('jQuery','Publish Subscribe','/jquery/publish-subscribe/','using-callbacks','Method 2',7.0,14.0,17.0,3.0,NULL,'using jQuery 1.7''s $.Callbacks() feature','','M2');
INSERT INTO patterns VALUES ('jQuery','Publish Subscribe','/jquery/publish-subscribe/','using-observable','Method 3',7.0,14.0,17.0,4.0,NULL,'using jQuery UI $.Observable','','M3');
INSERT INTO patterns VALUES ('jQuery','Publish Subscribe','/jquery/publish-subscribe/','using-plugins','Method 4',7.0,14.0,17.0,5.0,NULL,'third-party plugins','','M4');
INSERT INTO patterns VALUES ('jQuery','Plugins','/jquery/plugin/','highly-configurable','''Highly configurable'' mutable',7.0,15.0,18.0,2.0,NULL,'define plugin’s logic using a constructor and an object literal defined on its prototype','','Hcm');
INSERT INTO patterns VALUES ('jQuery','Plugins','/jquery/plugin/','basic','Basic',7.0,15.0,18.0,3.0,NULL,'the most basic pattern','','Bas');
INSERT INTO patterns VALUES ('jQuery','Plugins','/jquery/plugin/','best-options','Best options',7.0,15.0,18.0,4.0,NULL,'globally/Per-call overridable options for greater option customization','','Bop');
INSERT INTO patterns VALUES ('jQuery','Plugins','/jquery/plugin/','custom-events','Custom events (Pseudo Pub/Sub)',7.0,15.0,18.0,5.0,NULL,'for better application decoupling','','Cev');
INSERT INTO patterns VALUES ('jQuery','Plugins','/jquery/plugin/','extend','Extend',7.0,15.0,18.0,6.0,NULL,'enables you to define multiple functions at once and which sometimes make more sense semantically','','Ext');
INSERT INTO patterns VALUES ('jQuery','Plugins','/jquery/plugin/','lightweight','Lightweight',7.0,15.0,18.0,7.0,NULL,'perfect as a generic template for beginners and above','','Ltw');
INSERT INTO patterns VALUES ('jQuery','Plugins','/jquery/plugin/','namespaced','Namespaced pattern',7.0,15.0,19.0,1.0,NULL,'to avoid collisions and improve code organization when working with components under another namespace','','Nsp');
INSERT INTO patterns VALUES ('jQuery','Plugins','/jquery/plugin/','prototypal','Prototypal inheritance',7.0,15.0,19.0,2.0,NULL,'prototypal inheritance with the DOM-to-Object bridge pattern','','Pin');
INSERT INTO patterns VALUES ('jQuery','Plugins','/jquery/plugin/','ui-widget-requireJS module','UI Widget + RequireJS module',7.0,15.0,19.0,3.0,NULL,'for wrapping jQueryUI widgets inside RequireJS compatible modules','','Wrq');
INSERT INTO patterns VALUES ('jQuery','Plugins','/jquery/plugin/','ui-widget-factory','UI Widget factory',7.0,15.0,19.0,4.0,NULL,'for building complex, stateful plugins based on object-oriented principles','','Wfc');
INSERT INTO patterns VALUES ('jQuery','Plugins','/jquery/plugin/','ui-widget-factory-bridge','UI Widget factory "bridge"',7.0,15.0,19.0,5.0,NULL,'the bridge serves as a middle layer between a JavaScript object that is created using $.widget and jQuery’s API','','Wfb');
INSERT INTO patterns VALUES ('jQuery','Plugins','/jquery/plugin/','ui-widget-factory-mobile','UI Widget factory for jQuery mobile',7.0,15.0,19.0,6.0,NULL,'demonstrating best practices for building mobile widgets','','Wfm');
INSERT INTO patterns VALUES ('jQuery','Plugins','/jquery/plugin/','universal-module','Universal Module Definition pattern',7.0,15.0,19.0,7.0,NULL,'create AMD and CommonJS compatible plugin modules which are compatible with a number of different script loaders','<subdirectory>','UMD');
