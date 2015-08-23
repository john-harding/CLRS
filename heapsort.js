// All of these algorithms were learned while reading Introduction to Algorithms, 3rd Edition (CLRS)
// I have done them many times since, and these are all done from scratch without help from the book or the past algorithms I've written


// note: because of the way heapsort works (accessing children via bit shifting), the first item (arr[0]) will never be a part of the sorting process, only the heap
var arr = [0,53,26,8,3,44,31,78,99,235,12,45,72,18,39,61,68,489,5319,75];

var sorted = [3,8,12,18,26,31,39,44,45,53,61,68,72,75,78,99,235,489,5319];


function heapsort(A)
{
	build_max_heap(A);
	var B = [],
		temp;

	for(var i = A.length-1; i > 0; i--)
	{
		temp = A[i];
		A[i] = A[1];
		A[1] = temp;
		B[i-1] = A.pop();
		max_heapify(A,1);
	}
	return B;
}

function build_max_heap(A) // builds the heap
{
	for(var i = Math.floor(A.length/2); i > 0; i--)
	{
		max_heapify(A,i);
	}
}

function max_heapify(A,i)
{
	var L = i << 1;
	var R = (i << 1) + 1;
	var largest = i;
	var temp;

	if(L < A.length && A[L] > A[i])
	{
		largest = L;
	}
	if(R < A.length && A[R] > A[largest])
	{
		largest = R;
	}
	if(i != largest)
	{
		temp = A[i];
		A[i] = A[largest];
		A[largest] = temp;
		max_heapify(A,largest);
	}
}

var arr2 = heapsort(arr);



console.log(compare_arrays(arr2,sorted));


function compare_arrays(arr1, arr2) // compare the two arrays for equality
{
	if(arr1.length != arr2.length)
	{
		return false;
	}
	for(var i = 0; i < arr1.length; i++)
	{
		if(arr1[i] !== arr2[i])
		{
			return false;
		}
	}
	return true;
}