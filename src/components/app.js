import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      	<nav className="navbar navbar-default">
  		<div className="container">
	      <form className="navbar-form navbar-left">
	        <div className="form-group">
	          <input type="text" className="form-control" placeholder="Search" />
	        </div>
	        <button type="submit" className="btn btn-default">Search</button>
	      </form>
	      </div>
	     </nav>
	     <div className="col-md-7">
	     	<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src="//www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen=""></iframe>
			</div>
			<p className="lead"> Video Title</p>
			<p className="lead"> Video Info</p>
		</div>
		<div className="col-md-3">
		    <div className="thumbnail">
		      <img src="..." alt="..." />
		      <div className="caption">
		        <h3>Thumbnail label</h3>
		        <p>...</p>
		        <p>
		        	<a href="#" className="btn btn-primary" role="button">Button</a>
		        	<a href="#" className="btn btn-default" role="button">Button</a></p>
		      </div>
		    </div>
		    <div className="thumbnail">
		      <img src="..." alt="..." />
		      <div className="caption">
		        <h3>Thumbnail label</h3>
		        <p>...</p>
		        <p>
		        	<a href="#" className="btn btn-primary" role="button">Button</a>
		        	<a href="#" className="btn btn-default" role="button">Button</a></p>
		      </div>
		    </div>
		    <div className="thumbnail">
		      <img src="..." alt="..." />
		      <div className="caption">
		        <h3>Thumbnail label</h3>
		        <p>...</p>
		        <p>
		        	<a href="#" className="btn btn-primary" role="button">Button</a>
		        	<a href="#" className="btn btn-default" role="button">Button</a></p>
		      </div>
		    </div>
		    <div className="thumbnail">
		      <img src="..." alt="..." />
		      <div className="caption">
		        <h3>Thumbnail label</h3>
		        <p>...</p>
		        <p>
		        	<a href="#" className="btn btn-primary" role="button">Button</a>
		        	<a href="#" className="btn btn-default" role="button">Button</a></p>
		      </div>
		    </div>
		</div>
      </div>

    );
  }
}
