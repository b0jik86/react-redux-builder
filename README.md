# react-redux-builder

# requirements
* npm 3.* (global)
* node 4.*
* gulp-cli 0.4.* (global)

# install
* `npm run-script start`

# with any problems - plz contact me


# 1 (15.08)
* [video](https://www.youtube.com/watch?v=-Gp-i7hgun0)
* Each component can have the state
	* this.state - internal
	* this.props - from the parent component
	* this.setState() - method to update internal state with deep extend
	* `{ code }` - enter into a javascript world
* home task
	* create simple tabs with closer inside each
```js
<ul class="tabset">
	<li><a href="#tab1">Home</a></li>
	<li><a href="#tab2">Products</a></li>
	<li><a href="#tab3">About</a></li>
</ul>
<div class="tab-content">
	<div id="tab1">
		Home tab
		<a href="#" class="closer">close tab</a>
	</div>
	<div id="tab2">
		Products tab
		<a href="#" class="closer">close tab</a>
	</div>
	<div id="tab3">
		About tab
		<a href="#" class="closer">close tab</a>
	</div>
</div>
```


# 2 (17.08)
* [video](https://www.youtube.com/watch?v=W_5UdysMcwQ)
* Component Life-Cycle (should use it when need to control component more efficiency):
	* componentWillMount
	* render
	* componentDidMount
	* ...componentWillUpdate
	* ...componentWillUnmount
	* [DOCS](https://facebook.github.io/react/docs/component-specs.html)
* [Stateless component](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions)
	* should use it when don't need any state and extra controll
	* it's just a function
* To bind component each other can use EventEmitter instead functions in props

* home task
	* init any jquery or d3 plugin (up to you) from react component (your plugin should have API for update and destroy)
	* try to connect some global jquery module with react module via EventEmitter
	* fix bug. To reproduce:
		* make first todo completed
		* try to switch visible todo -> bug
