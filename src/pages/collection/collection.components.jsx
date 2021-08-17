import './collection.styles.scss';
import {connect} from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';



const CollectionPage = ({collection}) => (
  <div className="collection-page">
  <h2>collection page</h2>
  </div>);


const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);