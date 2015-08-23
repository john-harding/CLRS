// All of these algorithms were learned while reading Introduction to Algorithms, 3rd Edition (CLRS)
// I have done them many times since, and these are all done from scratch without help from the book or the past algorithms I've written

var arr = [53,26,8,3,44,31,78,99,235,12,45,72,18,39,61,68,489,5319,75];

function insertion_sort(A)
{
	var temp;
	for(var i = 1; i < arr.length; i++)
	{
		temp = A[i];
		for(var j = i - 1; j >= 0; j--)
		{
			if(temp < A[j])
			{
				A[j+1] = A[j];
			} else {
				break;
			}
		}
		A[j+1] = temp;
	}
}

insertion_sort(arr);