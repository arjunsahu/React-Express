import React from 'react';
import ReactDOM from 'react-dom';

export default class CampMap extends React.Component {

  renderChildren() {
    const {children} = this.props;
    if (!children) return;
    return React.Children.map(children, c => {
     return React.cloneElement(c, {
       map: this.map,
       google: this.props.google
     });
   })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
      this.forceUpdate()
   }
  }

  // called after the component renders
  loadMap() {
    if (this.props && this.props.google) {
      // google is available\
      const {google} = this.props;
      const maps = google.maps;

    // since the component has already rendered we can grab
    // a ref to the map div so we can properly load the map
    // this is not super react-ish, since ideally React alone
    // touches the DOM
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let zoom = 12;
      let lat = 25.02;
      let lng = 55.17;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  //
  }

  render() {
    const style = {
      minWidth: '75vw',
      minHeight: '100vh'
    

    }
    return (
      <div className="col-xs-8 col-sm-8 col-md-8 " style={style} ref='map'>
      {/* <div className="row"> */}
        {/* <div className='col-xs-8 col-sm-8 col-md-8' > */}
          {this.renderChildren()}
          Loading map...
        {/* </div> */}
      {/* </div> */}
      </div>
    )
  }
}
