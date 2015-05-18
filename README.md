![AngularJS Parallax](https://raw.github.com/brettdonohoo/angular-parallax/master/images/ng-parallax.png)

# Angular Parallax

**angular-parallax** is an [AngularJS](http://angularjs.org/) module for providing parallax-like functionality for DOM elements

Heavily inspired by [stellar.js](http://markdalgleish.com/projects/stellar.js/).

Demos
-----

Check out the demo [here](http://brettdonohoo.com/angular-parallax/index.html).

Version Numbers
---------------

Getting Started
---------------

 * [View the source](http://brettdonohoo.com/angular-parallax/index.html)
 * Include the script tag on your page after the AngularJS tag

        <script type='text/javascript' src='path/to/angular.min.js'></script>
        <script type='text/javascript' src='path/to/angular-parallax.js'></script>

 * Ensure that your application module specifies angular-parallax` as a dependency:

        angular.module('myApplication', ['angular-parallax']);

 * Use the directive by specifying a `parallax` or `parallax-background` attribute on an element.

        <img parallax parallax-ratio="0.4" src="some/image.jpg" />
        <div parallax-background parallax-ratio="0.2"></div>

Detailed Documentation
----------------------

**angular-parallax** accepts several attributes to customize the behavior of the directive; detailed instructions coming soon

Submitting Issues
----------------------

If your issue appears to be a bug, and hasn't been reported, open a new issue.  Providing the following information will increase the chances of your issue being dealt with quickly:

* **Overview of the Issue** - if an error is being thrown a non-minified stack trace helps
* **Motivation for or Use Case** - explain why this is a bug for you
* **Angular Parallax Version(s)** - is it a regression?
* **Browsers and Operating System** - is this a problem with all browsers or only IE8?
* **Reproduce the Error** - provide a live example (using [Plunker](http://plnkr.co/),
 [JSFiddle](http://jsfiddle.net/), or [CodePen](http://codepen.io/)).
* **Related Issues** - has a similar issue been reported before?
* **Suggest a Fix** - if you can't fix the bug yourself, perhaps you can point to what might be
  causing the problem (line of code or commit)

Here is a great example of a well defined issue: https://github.com/angular/angular.js/issues/5069

License
-------

**angular-parallax** is licensed under the MIT license. See the LICENSE file for more details.
