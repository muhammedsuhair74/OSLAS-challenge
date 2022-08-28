import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Search from "../serachPage";
import {setData} from './homeState';

import share  from '../../assets/share.png';
import toggle from '../../assets/toggle.png';
import Globe from '../../assets/Globe.png';
import oslash from '../../assets/oslash.png';
import link from '../../assets/link.png';

import questionmark from '../../assets/questionmark.png';

import './style.scss';

const HomePage = (props) => {
  const dispatch = useDispatch();
  const homePageValue = useSelector((state) => state.tempData.data);
  console.log(homePageValue)
  const [isShareClicked, setIsShareClicked]=useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const hideShareToWeb = (e) => {
      setIsSearching(true);
  }

  const showShareToWeb = () => {
    debugger
    setIsSearching(false);
  }

  useEffect(() => {
    console.log('hello')
  }, [homePageValue])

  const selectAccess = (e,item,subitemName) => {
    const updatedSubSection = homePageValue[item].map(item => {
      if(item.name === subitemName) {
        return({
          ...item,
          access: e.target.value
        });
      } else {
        return item;
      }
    });
    const updatedTempState = {
      ...homePageValue,
      [item]: [...updatedSubSection]
    };
    debugger;
    dispatch(setData(updatedTempState))
  }
  return (
  <div className="home-page-wrapper">
    <div>
      {!isSearching && (<button className="share-button" style={{display: 'flex'}} onClick={()=> setIsShareClicked(!isShareClicked)}>
        <p>Share</p>
        <img className="share-image" src={share} alt=""/>
      </button>)}
      {(isShareClicked && !isSearching) ? (
        <div className="list-wrapper">
          <div className="share-to-web-wrapper">
            <div className="share-to-web-icon-text-wrapper">
              <img src={Globe} alt=""/>
              <div className="text-wrapper">
                <p style={{fontWeight: '400px', fontSize: '16px', marginBottom: '0px'}}>Share to web</p>
                <p style={{fontSize: '14px', color: '#6B7280', marginTop: '0px'}}>Publish and share link with anyone</p>
              </div>
              <div className="share-to-web-icon-wrapper">
                <img className="share-to-web-icon" src={toggle} alt=""/>
              </div>
              <div className="share-to-web-text-wrapper"></div>
            </div>
            <div className="toggle-button"></div>
          </div>
          <div className="input-wrapper">
            <input onClick={hideShareToWeb} className="invite-input" placeholder="People, email, groups"/>
            <div className="button-invite">Invite</div>
          </div>
          <div className="access-items-wrapper">
            {
              Object.keys(homePageValue).map(item => {
                const selected = homePageValue[item].filter(subItem => subItem.selected === true);
                const itemsToDisplay = selected.map(subitem => {
                  debugger
                  return(
                    <div className="access-item-wrapper">
                      <img className="oslash-icon" src={subitem.image} alt="" />
                      {item === 'groups' ? (<div className="oslash-text-wrapper">
                        <p className="access-text">{subitem.name}</p>
                        <p className="access-text" style={{color: '#6B7280', fontSize: '12px'}}>`${subitem.numberOfMembers} workspace members`</p>
                      </div>) : (
                      <div className="oslash-text-wrapper">
                        <p className="access-text">{subitem.name}</p>
                      </div>)}
                      <div className="access-drop-down">
                        <select id="access" name="access-rights" onChange={(e) => selectAccess(e,item,subitem.name)}>
                          <option value="Full access" selected={subitem.access === 'Full access'}>Full access</option>
                          <option value="Can edit" selected={subitem.access === 'Can edit'}>Can edit</option>
                          <option value="Can view" selected={subitem.access === 'Can view'}>Can view</option>
                          <option value="No access" selected={subitem.access === 'No Access'}>No access</option>
                        </select>
                      </div>
                    </div>
                  )
                });
                return itemsToDisplay;
              })
            }
          </div>
          <div className="learn-sharing-wrapper">
            <div className="learn-icon-text-wrapper">
              <img style={{marginRight: '5px'}} className="question-mark" src={questionmark} alt="" />
              <p className="learn-sharing-text">Learn about sharing</p>
            </div>
            <div className="link-wrapper">
              <img style={{marginRight: '5px'}} className="link-icon" src={link} alt="" />
              <p className="copy-link-text">Copy link</p>
            </div>
          </div>
        </div>
      ): (isShareClicked && <Search setIsSearching={setIsSearching}/>)}
    </div>
  </div>)
};

export default HomePage;

