import React, {Component, Fragment} from "react";
import * as  actonCreators  from './store/actioncreators';
import {connect} from 'react-redux';
import {Select} from "antd";
import 'antd/dist/antd.css';
import Masonry from 'react-masonry-component';
import ReactSwipe from 'react-swipe';
import topsrc from '../img/top.png';
import logosrc from "../img/Logo.png";
import searchsrc from "../img/search.png";
import searchBtn from  "../img/search_button.png";
import selectrect from "../img/select_rect.png";
import selectmask from "../img/select_mask.png";
import bottom_bg from "../img/bottom_bg.png";
import bottom from "../img/bottom.png";
import copyRight from "../img/Copyright.png";
import banner from "../img/banner_0.png";
import download from  '../../node_modules/downloadjs';
import {
    Headers,
    TopImage,
    Contentbody,
    LogoImgae,
    SearchImage,
    Competition,
    Selection,
    SearchBtn,
    InputCode,
    SeachSureBtn,
    DetailMovie,
    SelectRect,
    DownloadBtn,
    BottomImage,
    BottomCopyRight,
    CopyRight,
    Banner

} from "./style";
const videoStyle = {
    position:"absolute",
    marginTop:2,
    marginLeft:4,

    width:240,
    height:230,
}

const imagesLoadedOptions = { background: '.my-bg-image-el' };
const masonryOptions = {
    transitionDuration: 0
};

const Option = Select.Option;
function handleChange(value) {
    console.log('ssc');
}
class Home extends Component {

    onMouseOver(e){
        this.props.onMouseOuter();
    }
    onMouseOut(e) {

        this.props.onMouseOuter();

    }
    componentDidMount(){

        this.props.getResList();

    }


    render() {
          const  {clickSearchSureBtn,clickDownload,list,onMouseOuter,onMouseOver,selectID,inputChangeValue,inputValue} = this.props;
          return (
            <Fragment>


                <Headers>
                    <TopImage src = {topsrc}/>
                    <LogoImgae src={logosrc}/>
                    {/*<Competition>选择赛事</Competition>*/}
                    <SearchImage src={searchsrc}/>
                    <InputCode type={"text"} placeholder = {"请输入参赛号码"} onChange = {inputChangeValue} value = {inputValue}/>
                    <SearchBtn src = {searchBtn}/>
                    <SeachSureBtn onClick = {(e)=> clickSearchSureBtn(inputValue)} />
                </Headers>
                {/*<Selection>*/}
                    {/*<Select defaultValue="重庆马拉松" style={{ width: 310 ,textAlign:"center"}} onChange={handleChange}>*/}
                        {/*<Option value="重庆马拉松">重庆马拉松</Option>*/}
                        {/*<Option value="太原马拉松">太原马拉松</Option>*/}
                    {/*</Select>*/}
                {/*</Selection>*/}
               <Banner src = {banner}/>
                <BottomImage src = {bottom_bg}/>
                <Contentbody>
                    <Masonry
                        className={'my-gallery-class'}
                        elementType={'div'}
                        options={masonryOptions}
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={false}
                        imagesLoadedOptions={imagesLoadedOptions}

                    >
                        {
                            list.map(function(item){
                              var isSelect = 'hidden';
                                if (item.id === selectID)
                                   isSelect = 'visible';
                                return (
                                    <DetailMovie  key = {item.id}  onMouseOver ={ (e)=>onMouseOver(e)} onMouseOut = {(e)=> onMouseOuter(e)} >
                                        {/* 可见属性为visible*/}
                                        <DownloadBtn id = {item.id}  style = {{backgroundImage: "url(" + selectmask + ")" , visibility:isSelect}} onClick = {clickDownload} >下载</DownloadBtn>
                                         <SelectRect id ={item.id}   src = {selectrect}    style = {{visibility:isSelect}}  />
                                         {/*<img id= {item.id} src={item.src} style={{width:250,height:250}}/>*/}
                                        <video className = "video" id = {item.id } style ={videoStyle}  controls ={'controls'}
                                                poster={item.resSrc}    >
                                            <source src = {item.resSrc} type={'video/mp4'}/>
                                        </video>
                                    </DetailMovie>
                                )
                            })
                        }
                    </Masonry>

                </Contentbody>

                 <BottomCopyRight src = {bottom}/>
                <CopyRight src = {copyRight}/>
                {/*<div style={{width:"300px",background:"red"}}>*/}
                {/*<ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:3000 }}   key={imageData.length}*/}
                {/*>*/}
                    {/*{*/}
                        {/*imageData.map((item)=>*/}
                            {/*<div key={item.id} >*/}
                                {/*<img src={item.src} />*/}
                            {/*</div>*/}
                        {/*)*/}
                    {/*}*/}
                {/*</ReactSwipe>*/}
                {/*</div>*/}

            </Fragment>
        );
    }
}

 const  mapStateToProps = (state)=>{

   return {
       list : state.Movies.resList,
       mouseState: state.Movies.mouseState,
       selectID: state.Movies.selectID,
       inputValue:state.Movies.compationNum
   };

 };

const mapDispatchToProps = (dispatch)=>{

    return {

        clickDownload (){
          //  download ("http://192.168.10.81:8090/static/Resource/upload/video.mp4")
        },
        getResList (){
            dispatch(actonCreators.getList())
        },
        onMouseOuter(e){

            dispatch(actonCreators.updateStateOuter(0))
        },
        onMouseOver(e){
            dispatch(actonCreators.updtateStateOver(e.target.id))
        },
        inputChangeValue(e){
          console.log(e.target.value);
            dispatch(actonCreators.changeNumberValue(e.target.value));
        },

        clickSearchSureBtn (inputValue){

            dispatch(actonCreators.getVideoByNum(inputValue))
        }
    }

};

export default connect (mapStateToProps,mapDispatchToProps) (Home) ;