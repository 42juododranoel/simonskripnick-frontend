<template>
  <div>
    <h2>Input one paragraph here:</h2>
    <textarea id="textarea" value="If you really want to hear about it, the first thing you'll probably want to know is where I was born, an what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth. In the first place, that stuff bores me, and in the second place, my parents would have about two hemorrhages apiece if I told anything pretty personal about them. They're quite touchy about anything like that, especially my father. They're nice and all — I'm not saying that — but they're also touchy as hell. Besides, I'm not going to tell you my whole goddam autobiography or anything. I'll just tell you about this madman stuff that happened to me around last Christmas just before I got pretty run-down and had to come out here and take it easy. I mean that's all I told D.B. about, and he's my brother and all. He's in Hollywood. That isn't too far from this crumby place, and he comes over and visits me practically every week end. He's going to drive me home when I go home next month maybe. He just got a Jaguar. One of those little English jobs that can do around two hundred miles an hour. It cost him damn near four thousand bucks. He's got a lot of dough, now. He didn't use to. He used to be just a regular writer, when he was home. He wrote this terrific book of short stories, The Secret Goldfish, in case you never heard of him. The best one in it was 'The Secret Goldfish.'' It was about this little kid that wouldn't let anybody look at his goldfish because he'd bought it with his own money. It killed me. Now he's out in Hollywood, D.B., being a prostitute. If there's one thing I hate, it's the movies. Don't even mention them to me."></textarea>
  
    <h2>Result:</h2>

    <p data-testid="editor-values" v-html="editor.result"></p>
    
    <button @click="editor.update()" data-testid="update">update</button>

    <Editor :paragraphs="editor.paragraphs" />
  </div>
</template>
  
<script setup lang="ts">  
const editor = useEditor()
</script>

<style>

textarea {
  width: 100%;
  height: 300px;
}

.small {
  background-color: lightgreen;
}

.medium {
  background-color: lightyellow;
}

.long {
  background-color: lightsalmon;
}

.length-10 {
  background-color: rgb(255, 255, 255);
}
.length-11 {
  background-color: rgb(255, 250, 250);
}
.length-12 {
  background-color: rgb(255, 245, 245);
}
.length-13 {
  background-color: rgb(255, 240, 240);
}
.length-14 {
  background-color: rgb(255, 235, 235);
}
.length-15 {
  background-color: rgb(255, 230, 230);
}
.length-16 {
  background-color: rgb(255, 225, 225);
}
.length-17 {
  background-color: rgb(255, 220, 220);
}
.length-18 {
  background-color: rgb(255, 215, 215);
}
.length-19 {
  background-color: rgb(255, 210, 210);
}
.length-20 {
  background-color: rgb(255, 205, 205);
}
.length-21 {
  background-color: rgb(255, 200, 200);
}
.length-22 {
  background-color: rgb(255, 195, 195);
}
.length-23 {
  background-color: rgb(255, 190, 190);
}
.length-24 {
  background-color: rgb(255, 185, 185);
}
.length-25 {
  background-color: rgb(255, 180, 180);
}
.length-26 {
  background-color: rgb(255, 175, 175);
}
.length-27 {
  background-color: rgb(255, 170, 170);
}
.length-28 {
  background-color: rgb(255, 165, 165);
}
.length-29 {
  background-color: rgb(255, 160, 160);
}
.length-30 {
  background-color: rgb(255, 155, 155);
}
.length-31 {
  background-color: rgb(255, 150, 150);
}
.length-32 {
  background-color: rgb(255, 145, 145);
}
.length-33 {
  background-color: rgb(255, 140, 140);
}
.length-34 {
  background-color: rgb(255, 135, 135);
}
.length-35 {
  background-color: rgb(255, 130, 130);
}
.length-36 {
  background-color: rgb(255, 125, 125);
}
.length-37 {
  background-color: rgb(255, 120, 120);
}
.length-38 {
  background-color: rgb(255, 115, 115);
}
.length-39 {
  background-color: rgb(255, 110, 110);
}
.length-40 {
  background-color: rgb(255, 105, 105);
}
.length-41 {
  background-color: rgb(255, 100, 100);
}
.length-42 {
  background-color: rgb(255, 95, 95);
}
.length-43 {
  background-color: rgb(255, 90, 90);
}
.length-44 {
  background-color: rgb(255, 85, 85);
}
.length-45 {
  background-color: rgb(255, 80, 80);
}
.length-46 {
  background-color: rgb(255, 75, 75);
}
.length-47 {
  background-color: rgb(255, 70, 70);
}
.length-48 {
  background-color: rgb(255, 65, 65);
}
.length-49 {
  background-color: rgb(255, 60, 60);
}
.length-overflow {
  background-color: rgb(255, 55, 55);
}

</style>