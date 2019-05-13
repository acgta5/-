import React from 'react'
import { connect } from 'react-redux'
import {RecommendLink,DownloadApp} from './../style'
class Recommend extends React.PureComponent{
    render(){
        let {recommends} = this.props;
        return (
            <div>
                {recommends.map(value=>(
                    <RecommendLink key={value.get('id')}>
                        <img  src={value.get('imgUrl')} alt="图片错误"/>
                    </RecommendLink>
                ))}
                <DownloadApp>
                    <img  src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="app"/>
                    <div>
                        <p className="app">下载简书APP &gt;</p>
                        <p className="des">随时随地发现和创作内容</p>
                    </div>
                </DownloadApp>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    recommends:state.getIn(['home','recommends'])
});
const mapDispatchToProps = (dispatch)=>({

});
export default connect(mapStateToProps,mapDispatchToProps)(Recommend);