import React from 'react';

export default class CampListItem extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.activeMarker !== prevProps.activeMarker) {
      let img_ref = this.refs.cg_image
      if (this.props.showingInfoWindow && (this.props.selectedTitle === this.props.title)) {
        img_ref.style.border = "3px solid black"
      }
      else {
        img_ref.style.border = null
      }
    }
  }

  getMarker(title_match) {
    let match_list = this.props.gmapMarkers.filter(item =>
      item.get('title') === title_match
    )
    if (match_list) {
      return match_list.first()
    }
    else {
      return null;
    }
  }

  render() {
    let latlng_str = parseFloat(this.props.position.first()).toFixed(3) + "," + parseFloat(this.props.position.last()).toFixed(3)
    let maps_url = "http://www.google.com/maps?q=" + latlng_str
    let img_url = "http://campnear.me/react_app_images/" +  this.props.image
    return (
      

      <div className="col-xs-3 col-sm-3 col-md-3" style={{"marginBottom":20,"marginLeft":20}}>
       <div className="row">
          
          <li onClick={() =>this.props.onMarkerClick(this.getMarker(this.props.title))}  ref="cg_image" >
              <a  target="_blank">{this.props.title}</a><br></br>
              <a target="_blank">{this.props.description}</a>
          </li>
        </div>
      </div>
      )
  }
}
