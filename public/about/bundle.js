!function t(e,n,r){function o(a,u){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};e[a][0].call(l.exports,function(t){var n=e[a][1][t];return o(n||t)},l,l.exports,t,e,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,e,n){"use strict";var r=document.getElementById("terminal"),o=function(t,e){!function n(r){if(t.length<=r++)e.value=t;else{e.value=t.substring(0,r);var o=Math.floor(50*Math.random()+1);setTimeout(function(){n(r)},o)}}(0)};o("\nPrimary Language: Javascript\n\n\nClient Side:\t\t\tBuild Tools:\n\nReact / Redux\t\t\tWebpack\nReact Native\t\t\tGulp\njQuery\t\t\t\tBabel\nCSS\t\t\t\t\tBrowserify\nSass\nReact Router\nHtml 5 Canvas\n\n\nBackend:\t\t\t\tTesting Tools:\n\nNode.js\t\t\t\tEnzyme\nExpress\t\t\t\tMocha / Chai\nPostgres\t\t\t\tSelenium\nMongoDB\t\t\tJest\nJSON Web-tokens\t\tFetch-Mock\nSocket.io\t\t\t\tCircle CI",r);document.getElementById("github").addEventListener("click",function(){r.value="",r.style.color="#33FF39",o("\n\n\nThanks for checking out my Github!\n\n\n********************************************\n\nIn case you missed them here are some of my favorite projects so far:\n\nhttps://movietracker-turing.herokuapp.com/\n\nhttps://voter-data.herokuapp.com/api/v1/voters\n\nhttps://dbull7.github.io/breakout/",r)})},{}]},{},[1]);