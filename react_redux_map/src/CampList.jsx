import React from 'react';
import CampListItem from './CampListItem'


// import SearchInput, {createFilter} from '../../lib/index'
import SearchInput, {createFilter} from 'react-search-input'


// const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name', 'id']

export default class CampList extends React.Component {
  getCampgrounds() {
    return this.props.markers.filter(
      cg => cg.get('mapOn') === true
    )
  }
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }


  render() {
    const style1 = {
   
      minHeight: '100vh',
      fontSize: '0.9em',
      Padding: '2vh 5vw'

    }


    return (
      <ul className="col-xs-3 col-sm-3 col-md-3" style={style1}>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {this.getCampgrounds().map(item =>
          <CampListItem {...this.props}
                  key={item.get('title')}
                  title={item.get('title')}
                  image={item.get('image')}
                  url={item.get('url')}
                  position={item.get('position')}
                  description={item.get('description')}
                  />
        )}
      </ul>
  )}
  }
