<script></script>

<template>
  <v-progress-linear color="purple" indeterminate></v-progress-linear>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="12">
        <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <v-card
            class="pa-4 card"
            color="secondary"
            v-bind="props"
            :class="{ 'on-hover': isHovering }"
            :elevation="isHovering ? 16 : 1"
            style="opacity: 1"
          >
            <div class="maintext6">
              <h1>タイムライン（開発中）</h1>
            </div>
            <div class="subtext"><p>コメントを残せます。</p></div>

            <v-text-field label="コメントをかいてね" variant="underlined"></v-text-field>
            <v-btn class="btn" style="float: right">送信</v-btn>
            <!---<li v-for="fav in " :key="fav.id"></li>-->

            <MeigenFavorite />
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
