import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {setData} from '../homePage/homeState';

import questionmark from '../../assets/questionmark.png';


import './style.scss';


const Search = (props) => {
  const homePageValue = useSelector((state) => state.tempData.data);
  const [fullItems, setFullItems] = useState(homePageValue);
  const [searchedItem, setSearchedItem] = useState('');
  const {setIsSearching} = props
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus();
  },[])

  const searchItem =(value) => {
    debugger;
    const tempEmailItems = homePageValue.email;
    const tempGroupItems = homePageValue.groups;
    const tempEmailSearchedItems = tempEmailItems.filter(emailItem => {
      return(emailItem.name.includes(value));
    });
    const tempGroupSearchedItems = tempGroupItems.filter(emailItem => {
      return(emailItem.name.includes(value));
    });
    if(value === '') {
      setSearchedItem('');
      setFullItems(homePageValue);
    }
    setFullItems({
      email: [...tempEmailSearchedItems],
      groups: [...tempGroupSearchedItems]
    })
  }

  const selected = (e) => {
    if(e.keyCode === 13) {
      const selectedName = e.target.value;
      const isSelectedElementInData = Object.keys(homePageValue).some(item =>
        homePageValue[item].some(element => element.name === selectedName)
      );
      if(isSelectedElementInData) {
        setSearchedItem(selectedName);
      }
    }}

  const addToShareWidgets = () => {
    const tempFullData = {};
    Object.keys(homePageValue).forEach(item => {
      tempFullData[item] = homePageValue[item].map(subItem => {
        if(subItem.name === searchedItem) {
          return ({
            ...subItem,
            selected: true
          })
        } else {
          return subItem;
        }
      });
    });
    debugger;
    setIsSearching(false)
    dispatch(setData(tempFullData));
  }

  const changeAccess = (e) => {
    debugger;
    const tempFullData = {};
    Object.keys(homePageValue).forEach(item => {
      tempFullData[item] = homePageValue[item].map(subItem => {
        if(subItem.name === searchedItem) {
          return ({
            ...subItem,
            access: e.target.value
          })
        } else {
          return subItem;
        }
      });
    });
    dispatch(setData(tempFullData));
    // setData(tempFullData);
  }
  // const {data} = props;
  return (
    <div className="search-parent-wrapper">
      <div className="search-header-wrapper">
        <div className="searched-items">
          {searchedItem !== '' ? (
            <div className="searched-item">
              <p className="searched-item-text">{searchedItem}</p>
              <button className="close-button" onClick={() => {
                setSearchedItem(''); 
                setFullItems(homePageValue);
                }}>
                  x
              </button>
            </div>) : (
              <input ref={inputRef} className="search-text" type="text" onKeyDown={(e) => selected(e)} onChange={(e) => searchItem(e.target.value)}  placeholder=" Search emails, names or groups"/>
            )
          }
        </div>
        <select id="access-select" name="access" disabled={searchedItem === ''} onChange={changeAccess}>
          <option value="Full access">Full access</option>
          <option value="Can edit">Can edit</option>
          <option value="Can view">Can view</option>
          <option value="No access">No access</option>
        </select>
        <button className="invite-button" onClick={addToShareWidgets}>Invite</button>
      </div>

      <div className="group_item-wrapper">
        {
          Object.keys(fullItems).map(item => {
            // const selected = fullItems[item].filter(subItem => subItem.selected === true);
            if(fullItems[item].length === 0) {
              return null
            } else {
            const itemsToDisplay = fullItems[item].map(subitem => {
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
                    <div id="access" name="access-rights">{subitem.access}</div>
                  </div>
                </div>
              )
            });
            return (
            <div className="group-items">
              <div className="item-header">{item}</div>
              <div className="access-items-wrapper">
                {itemsToDisplay}
              </div>
            </div>);
            }
          })
        }
      </div>

      <div className="footer">
        <div className="learn-icon-text-wrapper">
          <img style={{marginRight: '5px'}} className="question-mark" src={questionmark} alt="" />
          <p className="learn-sharing-text">Learn about sharing</p>
        </div>
      </div>
    </div>
  )
}

export default Search;