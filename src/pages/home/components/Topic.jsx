import React from 'react'
import { connect } from 'react-redux'
import {TopicWrapper , TopicItem , TopicMore} from './../style'
class Topic extends React.PureComponent{
    render(){
        return (
            <TopicWrapper>
                {this.props.list.map(value=>{
                    return (
                        <TopicItem key={value.get('id') }>
                            <img src={value.get('imgUrl')} alt={value.get('title')}/>
                            {value.get('title')}
                        </TopicItem>
                    )
                })}
                <TopicMore>
                    更多热门专题 &gt;
                </TopicMore>
            </TopicWrapper>
        )
    }
}
const mapState = (state)=>({
    list:state.get('home').get('topics')
});

export default connect(mapState)(Topic);