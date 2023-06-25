import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {

  return (
    <div className="single">
      <div className="content">
        <img src='https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' alt="" />
        <div className="user">
          <div className="info">
            <span>USERNAME</span>
            <p>Posted </p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`} >
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>

        </div>
        <h1>TITLE</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestias deleniti numquam id? Deserunt ut natus fugit odio corrupti dolorum modi eos, nam dignissimos voluptate recusandae possimus praesentium dolore rerum in, nisi ullam numquam, voluptates cum necessitatibus excepturi cumque consequatur itaque? Cupiditate eaque, magni vero, id tempora blanditiis sapiente pariatur commodi odit amet nobis reiciendis quasi. Neque, dolorum beatae exercitationem harum facere dolores quibusdam numquam obcaecati dolor dicta aut quaerat id esse voluptatem consequatur voluptate impedit nostrum amet. Fuga id, porro dignissimos corrupti voluptates cumque facilis est aspernatur sit ratione nisi minima vel quibusdam vero ducimus iusto, rem consectetur magni!</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestias deleniti numquam id? Deserunt ut natus fugit odio corrupti dolorum modi eos, nam dignissimos voluptate recusandae possimus praesentium dolore rerum in, nisi ullam numquam, voluptates cum necessitatibus excepturi cumque consequatur itaque? Cupiditate eaque, magni vero, id tempora blanditiis sapiente pariatur commodi odit amet nobis reiciendis quasi. Neque, dolorum beatae exercitationem harum facere dolores quibusdam numquam obcaecati dolor dicta aut quaerat id esse voluptatem consequatur voluptate impedit nostrum amet. Fuga id, porro dignissimos corrupti voluptates cumque facilis est aspernatur sit ratione nisi minima vel quibusdam vero ducimus iusto, rem consectetur magni!</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestias deleniti numquam id? Deserunt ut natus fugit odio corrupti dolorum modi eos, nam dignissimos voluptate recusandae possimus praesentium dolore rerum in, nisi ullam numquam, voluptates cum necessitatibus excepturi cumque consequatur itaque? Cupiditate eaque, magni vero, id tempora blanditiis sapiente pariatur commodi odit amet nobis reiciendis quasi. Neque, dolorum beatae exercitationem harum facere dolores quibusdam numquam obcaecati dolor dicta aut quaerat id esse voluptatem consequatur voluptate impedit nostrum amet. Fuga id, porro dignissimos corrupti voluptates cumque facilis est aspernatur sit ratione nisi minima vel quibusdam vero ducimus iusto, rem consectetur magni!</p>
        </div>
      <Menu />
    </div>
  );
};

export default Single;
