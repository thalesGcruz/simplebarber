<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="headerModelAgenda">
              <button
                class="btn times"
                @click="$emit('close')">
                <i class="fas fa-times "></i>
              </button>
              <slot name="header"></slot>
          </div>
          
          <div class="">
            <slot name="body">default body</slot>
          </div>

          <div class="">
            <slot name="footer">
                
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    show: Boolean
  }
}
</script>


<style >

.modal-mask {
  position:fixed;
  z-index:99999;
  left:0px;
  top:0px;
  width:100%;
  height:100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-wrapper {
    position:relative;
    top:8px;
}

.modal-container{
  scrollbar-width: 12px;
  overflow:auto;
  overflow-x:hidden;
  width: 1305px;
  height:625px;
  margin: 0px auto;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-container::-webkit-scrollbar{
  width: 10px; height: 10px; 
}
.modal-container::-webkit-scrollbar-track{
  background-color:#000;
}
.modal-container::-webkit-scrollbar-thumb{
  background-color:bue;
}

.headerModelAgenda{
  border-left:8px solid #8d00a6;
}
.times{
  position:relative;
  top:10px;
  left:1250px;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>