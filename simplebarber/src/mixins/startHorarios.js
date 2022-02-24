import {mapGetters, mapActions} from 'vuex'
const horarios = {
	methods:{
		startHorarios(){
			if(this.getBarbershopStartTime !== null
				&& this.getBarbershopEndTime !== null){
				let timeStart = this.getBarbershopStartTime
				let timeEnd = this.getBarbershopEndTime
				var horarios = this.mountedHorarios(timeStart,timeEnd) 	
				this.setHorarios(horarios);
			}
		},
		mountedHorarios(timeStart,timeEnd){
			
			timeStart = timeStart.split(':')
			timeEnd = timeEnd.split(':')
			
			const hStart = parseFloat(timeStart[0])
			const mStart = parseFloat(timeStart[1])
			const hEnd = parseFloat(timeEnd[0])
			const mEnd = parseFloat(timeEnd[1])

			var horarios = [];

			for(var h = hStart; h <= hEnd; h++){	
				var m = 0;
				var limit = 60;
				if(h == hStart){ m = mStart }
				if(h == hEnd){ limit = mEnd }
				
				for(m; m <=limit; m++){
					var index = this.formatted(h,m)
					horarios.push({horario: index, status: null});
				}
			}
			
			return horarios	
		},
		formatted(h,m){

			var index = null;

			if(h < 10){
				if(m < 10){
					index = "0"+ h + ":0"+ m
				}else{
					index = "0"+ h + ":"+ m
				}
			}else{
				if(m < 10){
					index = h + ":0"+ m
				}else{
					index = h + ":"+ m
				}
			}

			return index;
		},
		...mapActions(['setHorarios'])
	},
	computed:{
		...mapGetters([
			'getBarbershopStartTime',
			'getBarbershopEndTime',
			'getHorarios'
		])	
	}
}
export default horarios