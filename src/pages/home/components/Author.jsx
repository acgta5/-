import React from 'react'
import { connect } from 'react-redux'
import { AuthorWrapper , AuthorTitle , AuthorItem } from './../style'
import { actionCreators } from './../store'
class Author extends React.PureComponent{
    render(){
        let {authors,changeAuthorsPage,authorsPage,authorsTotalPage} = this.props;
        let newAuthors = authors.toJS();
        let authorDatas = [];
        if(newAuthors.length){
            for(let i=(authorsPage-1)*6;i<(authorsPage===authorsTotalPage? newAuthors.length : authorsPage*6);i++){
                authorDatas.push(
                    <AuthorItem key={newAuthors[i].id}>
                        <img src={newAuthors[i].imgUrl} alt=""/>
                        <a href="#/" className="addAuthor">
                            + 关注
                        </a>
                        <div>
                            <p className="title">
                                {newAuthors[i].title}
                            </p>
                            <p className="des">{newAuthors[i].des}</p>
                        </div>
                            
                    </AuthorItem>
                )
            }
        }else{
           return  null
        }
        return (
            <AuthorWrapper>
                <AuthorTitle>
                    <span className="recommend">推荐作者</span>
                    <a href="#/" className="switch"
                         onClick={e=>changeAuthorsPage(e,authorsPage,authorsTotalPage)}
                    >
                        <span className="iconfont spin">&#xe6a7;</span>
                        换一批
                    </a>
                </AuthorTitle>
                {authorDatas}
                
            </AuthorWrapper>
        )
    }
}
const mapStateToProps = (state)=>({
    authors:state.getIn(['home','authors']),
    authorsTotalPage : state.getIn(['home','authorsTotalPage']),
    authorsPage : state.getIn(['home','authorsPage'])
});
const mapDispatchToProps = (dispatch)=>({
    changeAuthorsPage(e,authorsPage,authorsTotalPage){
        const i =e.target.children[0].style.transform.replace(/[^0-9]/ig,"");
        e.target.children[0].style.transform= i ? "rotate("+(parseInt(i)+360)+"deg)" : "rotate(360deg)"; 
        if(authorsPage<authorsTotalPage){
            dispatch(actionCreators.changeAuthorsPage(authorsPage+1))
        }else{
            dispatch(actionCreators.changeAuthorsPage(1));
        }
        
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Author);