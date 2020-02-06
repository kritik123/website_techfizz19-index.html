var ModalReg     = document.getElementById('ModalReg');
var ModalAbt     = document.getElementById('ModalAbt');
var ModalDev     = document.getElementById('ModalDev');
var ModalPrize   = document.getElementById('ModalPrize');
var ModalPol     = document.getElementById('ModalPol');


var modalRegBtn   = document.getElementById('modalRegBtn');
var modalPrizeBt  = document.getElementById('modalPrizeBtn');
var modalDevBtn   = document.getElementById('modalDevBtn');
var modalAbtBtn   = document.getElementById('modalAbtBtn');
var modalPolBtn   = document.getElementById('modalPolBtn');


var closeRegBtn   = document.getElementById('closeRegBtn');
var closePrizeBtn = document.getElementById('closePrizeBtn');
var closeAbtBtn   = document.getElementById('closeAbtBtn');
var closeDevBtn   = document.getElementById('closeDevBtn');
var closePolBtn   = document.getElementById('closePolBtn');

var closeRegMark   = document.getElementById('closeRegMark');
var closePrizeMark = document.getElementById('closePrizeMark');
var closeAbtMark   = document.getElementById('closeAbtMark');
var closeDevMark   = document.getElementById('closeDevMark');
var closePolMark   = document.getElementById('closePolMark');

modalRegBtn.addEventListener('click', openRegModal);
modalPrizeBtn.addEventListener('click', openPrizeModal);
modalAbtBtn.addEventListener('click', openAbtModal);
modalDevBtn.addEventListener('click', openDevModal);
modalPolBtn.addEventListener('click', openPolModal);



closeRegBtn.addEventListener('click', closeRegModal);
closePrizeBtn.addEventListener('click', closePrizeModal);
closeAbtBtn.addEventListener('click', closeAbtModal);
closeDevBtn.addEventListener('click', closeDevModal);
closePolBtn.addEventListener('click', closePolModal);


closeRegMark.addEventListener('click', closeRegModal);
closePrizeMark.addEventListener('click', closePrizeModal);
closeAbtMark.addEventListener('click', closeAbtModal);
closeDevMark.addEventListener('click', closeDevModal);
closePolMark.addEventListener('click', closePolModal);

window.addEventListener('click', clickOutside);

// opening a modal
function openRegModal(e){
	ModalReg.style.display = 'block';
}

function openPrizeModal(){
	ModalPrize.style.display = 'block';
}

function openAbtModal(){
	ModalAbt.style.display = 'block';
}

function openDevModal(){
	ModalDev.style.display = 'block';
}

function openPolModal(){
	ModalPol.style.display = 'block';
}



//closing the modal
function closeRegModal(){
	ModalReg.style.display = 'none';
} 

function closePrizeModal(){
	ModalPrize.style.display = 'none';
} 

function closeAbtModal(){
	ModalAbt.style.display = 'none';
} 

function closeDevModal(){
	ModalDev.style.display = 'none';
} 

function closePolModal(){
	ModalPol.style.display = 'none';
} 


// clicking outside
function clickOutside(e){
	if(e.target == ModalReg || e.target == ModalPrize || e.target == ModalAbt || e.target == ModalDev || e.target == ModalPol){
		ModalReg.style.display = 'none';
		ModalPrize.style.display = 'none';
		ModalAbt.style.display = 'none';
		ModalDev.style.display = 'none';
		ModalPol.style.display = 'none';
	}
}