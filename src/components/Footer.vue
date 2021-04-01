<template lang="pug">
footer
  .group
    h4 Devcord
    ul
      li
        a(href="https://lost.design/legal-notice") Legal Notice
      li
        a(href="https://rickroll.com") Rickroll
      li
        a(href="https://discord.gg/D3HGuPHt8z") Invite

  .group
    h4 Socials
    ul
      li
        a(href="https://www.youtube.com") YouTube (soon)
      li
        a(href="https://github.com/ayup-gang") GitHub
      li
        a(href="https://discord.gg/jaynepal") Jay Nepal
      li
        a(href="https://spotify") Spotify (soon)

  .group
    h4 Projects (soon)
    ul
      li
        a(href="") 
      li
        a(href="") 
      li
        //- a( to="" ) 
      li
        a(href="") 
  .group
    h4 Contact
    ul
      li
        a(href="mailto:ayup.cord@gmail.com") ayup.cord@gmail.com

  //- .github
  //-   a( href="https://github.com/ayup-gang" )
  //-     Icon github
</template>

<script>
  import Icon from "@/components/Icon"

  export default {
    components: {
      Icon,
    },
  }
</script>

<style lang="scss" scoped>
@import "~mixins/breakpoints";

footer {
  display: flex;
  flex-wrap: wrap;
  padding: 150px;
  justify-content: space-around;
  border-top: 1px solid rgba(white, 0.05);
  position: relative;

  @include lg {
    padding: 60px;
  }

  @include md {
    flex-direction: column;

    .group:not(:last-child) {
      margin-bottom: 60px;
    }
  }
}

.github {
  position: absolute;
  bottom: 15px;
  left: 15px;

  a > svg {
    height: 30px;
    fill: white;
  }
}

h4 {
  margin-bottom: 10px;
  font-size: 18px;
}

// .group:not(:last-child) {
//   margin-right: 150px;
// }

li {
  list-style: none;

  a {
    color: rgba(white, 0.8);
    font-weight: 200;

    &:hover,
    &:focus {
      color: var(--accent);
    }
  }

  // &::before {
  //   content: '';
  //   background-color: rgba(white, 0.8);
  //   border-radius: 50%;
  //   width: 4px;
  //   height: 4px;
  //   margin-right: 7px;
  //   margin-bottom: 3.5px;
  //   display: inline-block;
  // }

  &:not(:last-child) {
    margin-bottom: 3px;
  }
}
</style>
