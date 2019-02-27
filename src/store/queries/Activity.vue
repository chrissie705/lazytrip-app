<template>
  <!-- Apollo watched Graphql query -->
  <ApolloQuery
    :query="require('./Activity.gql')"
    :variables="{
      name: 'My Hero Academia : Two Heroes'
    }"
  >
    <template slot-scope="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>
      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occured</div>
      <!-- Result -->
      <div v-else-if="data" class="result apollo">{{ data }}</div>
      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</template>
