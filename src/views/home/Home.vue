<template>
  <div class="home">
    <div>{{ version }}</div>
    <!-- <div>{{ findUser }}</div>
    <div>{{ userList }}</div> -->
    <router-view />
    <!-- <a-button @click="$router.push('/micro-react/child-one')">back home</a-button> -->
    <!-- <div style="margin-top: 10px;">
      <a-button @click="getData">点击按钮触发时间请求graphQl接口</a-button>
    </div>
    <div style="margin-top: 10px;">
      <a-button @click="loadMore">加载更多</a-button>
    </div>
    <div style="margin-top: 10px;">
      <a-button @click="doAdd">添加</a-button>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import gql from 'graphql-tag'
// import gqlTranslations from './translations.gql';
// import "vue-apollo"

const findUser = gql`query findUser($id:String!){
  findUser(id: $id){
    _id,
    username,
    createdAt,
    updatedAt
  }
}
`;

const userList = gql`
  query userList{
    userList{
      _id,
      username,
      createdAt,
      updatedAt
    }
  }
`;

const addUser = gql`mutation($username:String!){
  addUser(user:{username: $username}){
    _id,
    username,
    createdAt,
    updatedAt
  }
}
`;

const namespace = 'global';

@Component({
  // apollo: {
  //   userList() {
  //     console.log(this.page)
  //     return {
  //       query: userList
  //     }
  //   },
  // }
})
export default class Home extends Vue {
  @State('version', { namespace }) private version?: string;
  // private translations = {};
  private page = 1;
  private findUser = {};
  doAdd() {
    this.$apollo.mutate({
      mutation: addUser,
      variables: {
        username: '111'
      }
    }).then((response)=>{
      console.log(response);
    }).catch((err)=>{
      console.log(err)
    })
  }
  getData() {
    // console.log(this.userList)
    // console.log(this.$apollo);
    this.$apollo.addSmartQuery('findUser', {
      query: findUser,
      variables: {
        id: '5f7c380818cdaf11aedcdabd'
      },
      result(responese) {
        console.log('responese: ', responese);
      },
      error(err) {
        console.log('err: ', err);
      }
    })
  }
  loadMore() {
    this.$apollo.queries.userList.fetchMore({
      // 用新数据转换之前的结果
      updateQuery: (previousResult, { fetchMoreResult }) => {
        console.log(fetchMoreResult);
        return {
          userList: [
            ...previousResult.userList,
            ...fetchMoreResult.userList
          ]
        };
      }
    })
  }
  // created() {
  //   this.getData()
  // }
}
</script>
