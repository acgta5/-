import React from 'react'
import {connect} from 'react-redux'
import {ListItem,ListInfo,LoadMore} from './../style'
import {actionCreators} from './../store'
import { Link } from 'react-router-dom'
class List extends React.PureComponent{
    render(){
        let {getMoreList,lists,listsPage} = this.props;
        return (
            <div>
                {lists.map((value,index)=>{
                    return (
                        <Link key={index} to={/detail/+value.get('id')}>
                            <ListItem>
                                <img className="listPic" alt={value.get('title')} src={value.get('imgUrl')}/>
                                <ListInfo>
                                    <p className="title">{value.get('title')}</p>
                                    <p>{value.get('content')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    )
                })}
                <LoadMore onClick={()=>getMoreList(listsPage)}>点击获取更多内容</LoadMore>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    lists:state.getIn(['home','lists']),
    listsPage:state.getIn(['home','listsPage'])
});
const mapDispatchToProps = (dispatch)=>({
    getMoreList(listsPage){
        console.log()
        dispatch(actionCreators.getMoreList(listsPage));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(List);