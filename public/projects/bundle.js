!function e(t,n,o){function c(r,d){if(!n[r]){if(!t[r]){var a="function"==typeof require&&require;if(!d&&a)return a(r,!0);if(i)return i(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[r]={exports:{}};t[r][0].call(l.exports,function(e){var n=t[r][1][e];return c(n||e)},l,l.exports,e,t,n,o)}return n[r].exports}for(var i="function"==typeof require&&require,r=0;r<o.length;r++)c(o[r]);return c}({1:[function(e,t,n){"use strict";window.addEventListener("touchstart",function e(){for(var t=document.getElementsByClassName("hover-layer");t.length;)t[0].remove();document.getElementById("sc3-container").addEventListener("click",function(){o("Static Comp 3")}),document.getElementById("breakout-container").addEventListener("click",function(){o("breakout")}),document.getElementById("jetfuel-container").addEventListener("click",function(){o("jetfuel")}),document.getElementById("2DoBox-container").addEventListener("click",function(){o("2DoBox")}),document.getElementById("cs-container").addEventListener("click",function(){o("code-sport")}),document.getElementById("weathrly-container").addEventListener("click",function(){o("weathrly")}),document.getElementById("voter-data-container").addEventListener("click",function(){o("voter-data")}),document.getElementById("movie-tracker-container").addEventListener("click",function(){o("movie-tracker")}),window.removeEventListener("touchstart",e,!1)},!1);var o=function(e){fetch("/api/v1/projects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({project:e})}).then(function(e){return e.json()}).then(function(e){c(e)}).catch(function(e){return console.log(e)})},c=function(e){var t=e.project,n=t.name,o=t.description,c=t.technologies,i=t.github,r=t.site,d="<div class='popup-background' id='pop'>\n                <div class='popup'>\n                  <p class='popup-title'>"+n+"</p>\n                  <picture>\n                    <source srcset='"+t.webp+"' type='image/webp'>\n                    <source srcset='"+t.jpg+"' type='image/jpeg'>\n                    <img id='large-img' src='"+t.jpg+'\' alt="Movie Tracker Screenshot">\n                  </picture>\n                  <p>'+o+"</p>\n                  <ul class='tech-list'>\n                  "+c.map(function(e){return"<li class='tech'>"+e+"</li>"}).join("")+"\n                  </ul>\n                  <a href='"+i+"' target=\"_blank\" class='popup-links'>Github</a>\n                  <a href='"+r+"' target=\"_blank\" class='popup-links'>Website</a>\n                </div>\n              </div>";document.body.insertAdjacentHTML("beforeend",d),document.body.style.overflow="hidden",document.getElementById("pop").addEventListener("click",function(){document.getElementById("pop").remove(),document.body.style.overflow="auto"})};document.getElementById("movie-tracker-btn").addEventListener("click",function(){o("movie-tracker")}),document.getElementById("voter-data-btn").addEventListener("click",function(){o("voter-data")}),document.getElementById("weathrly-btn").addEventListener("click",function(){o("weathrly")}),document.getElementById("cs-btn").addEventListener("click",function(){o("code-sport")}),document.getElementById("box-btn").addEventListener("click",function(){o("2DoBox")}),document.getElementById("jf-btn").addEventListener("click",function(){o("jetfuel")}),document.getElementById("breakout-btn").addEventListener("click",function(){o("breakout")}),document.getElementById("sc3-btn").addEventListener("click",function(){o("Static Comp 3")})},{}]},{},[1]);