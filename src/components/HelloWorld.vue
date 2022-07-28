<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <button @click="onClick">Click</button>
  </div>
</template>

<script>
import { firebaseDb } from "@/firebaseInit";
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    async onClick() {
      console.log("HelloWorld.vue: onClick()");
      try {
        const querySnapshot = await getDocs(collection(firebaseDb, "testing"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().name} - ${doc.data().lastName}`);
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
