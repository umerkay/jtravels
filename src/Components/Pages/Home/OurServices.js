import {
  faCalendar,
  faCogs,
  faPhone,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./OurServices.scss";

export default function OurServices() {
  return (
    <div id="services">
      <div class="service">
        <div class="logo">
          <FontAwesomeIcon icon={faCogs}></FontAwesomeIcon>
        </div>
        <div class="title">Customizable</div>
        <div class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at
          totam similique laborum nesciunt molestias.
        </div>
      </div>
      <div class="service">
        <div class="logo">
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
        </div>
        <div class="title">24/7 Support</div>

        <div class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at
          totam similique laborum nesciunt molestias.
        </div>
      </div>
      <div class="service">
        <div class="logo">
          <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
        </div>
        <div class="title">All-Year Round</div>

        <div class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at
          totam similique laborum nesciunt molestias.
        </div>
      </div>
      <div class="service">
        <div class="logo">
          <FontAwesomeIcon icon={faUmbrellaBeach}></FontAwesomeIcon>
        </div>
        <div class="title">Secure & Safe</div>

        <div class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at
          totam similique laborum nesciunt molestias.
        </div>
      </div>
    </div>
  );
}
