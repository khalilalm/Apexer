import React, { Component } from "react";
import "./HeroSub.css";
import Analysis from "../images/analysis.png";
import Newspaper from "../images/newspaper.svg";
import Axe from "../images/axe.png";
import BH from "../images/BH-background.jpg";
import News_Item from "./News-item";
class HeroSub extends Component {
  state = {};
  render() {
    return (
      <div class="p-8 ">
        <svg class=" animate-bounce object-center w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM127 297c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 214.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 409c-9.4 9.4-24.6 9.4-33.9 0L127 297z"/></svg>
        <h1 class="bg-red-700 border-red-600 border-b p-4 m-4 rounded">
          News & Updates
        </h1>

        <div class="space-y-15 p-10 divide-y divide-black-300 ">
          
          <h1 class="color red">Latest Updates</h1>
          {/* Item 1 */}
          <News_Item image={BH} title="Bloodhound - Sight of the all-father fixed" subtitle="18h ago - Jenna Ortega stars as the iconic Wednesday Addams." />
        
          {/* Item 2 */}
          <News_Item image="https://wallpaper.dog/large/20498629.jpg" title="Wraith - Phase time reduced" subtitle="Bug fixes" />
         

          {/* Item 3 */}
          <News_Item image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/596dacce-70a0-4cb7-b3d8-67a2e94df833/dep4opw-221a5b19-cd3b-413a-86b2-aad8797698b2.png/v1/fill/w_1280,h_720,q_80,strp/apex_legends___valkyrie_birthright_4k_wallpaper_by_akaniya_dep4opw-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNTk2ZGFjY2UtNzBhMC00Y2I3LWIzZDgtNjdhMmU5NGRmODMzXC9kZXA0b3B3LTIyMWE1YjE5LWNkM2ItNDEzYS04NmIyLWFhZDg3OTc2OThiMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.pN6DQ24vLpSsyoqFaIQsatSKMKdptckDzgQmyXCvW9U" title="Bloodhound" subtitle="Bug fixes" />
          
        </div>
        

      </div>
    );
  }
}

export default HeroSub;
