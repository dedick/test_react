import { connect } from 'react-redux';
// import { useParams } from 'react-router-dom';
import GnomeDetailRender from '../components/GnomeDetailRender';

const getGnome = (items, props) => {
  console.log(items);
  console.log(props);
  const result = items.filter(item => item.id == props.id);
  if (result.length > 0){
    return result.shift();
  }
  return null;
};



const mapStateToProps = (state, ownProps) => ({
  gnome: getGnome(state.gnomes.items, ownProps)
});

export default connect(mapStateToProps)(GnomeDetailRender);