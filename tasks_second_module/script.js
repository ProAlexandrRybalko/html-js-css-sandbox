//1
const filterElements = (arr) => {
  let filtered_array = [];

  arr.forEach(val => {
    if(val['age'] > 20) filtered_array.push(val);
  });

  return filtered_array;
}

const elements = [
  {name: 'test', age: 45, country: 'RF', tel: '+79846466744'},
  {name: 'test1', age: 23, country: 'RF', tel: '+79464747484'},
  {name: 'test2', age: 18, country: 'RF', tel: '+376483876346'}
];
const filterArray = filterElements(elements);
console.log(filterArray);

//2
const mergeArray = (arr1, arr2) => {
  let difference = arr2.filter(x => !arr1.includes(x));

  return arr1.concat(difference);
}

const array1 = [5, 8, -3, 7, 3, 7, 3, 8, 9, 2, 8, -2];
const array2 = [8, 5, 7, -3, 6, 3, 1, 4, 2];
const mergeArr = mergeArray(array1, array2);
console.log(mergeArr);

//3
const reflect_str = (outer_str) => {
  let mas = [...outer_str];
  let reflect_mas = mas.reverse();

  return reflect_mas.join('');
}

//4
let text_str = 'test! education! part!!! 2!!!!';
console.log(text_str.replace('!', ''));

//5
const amount_dividers = num => {
  let amount = 2;

  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      amount += 1;
      break;
    }
  }

  return amount > 2;
}

//6
const unique_elems = array => {
  let unique = [];
  array.forEach(val => {
    if(!unique.includes(val)) unique.push(val);
  })
}

//7
const print_x3_symbols = outer_str => {
  let i = 2;

  while(i < outer_str.length) {
    alert(outer_str[i]);
    i += 3;
  }
}

//8
const filter_negative = array => array.filter(x => x > 0);
//or
const filter_negative1 = array => {
  let i = 0;

  while(i < array.length) {
    if(array[i] < 0) {
      array.splice(i, 1);
    }
    else i++;
  }

  return array;
}

//9
const sum_mas = array => {
  let sum = 0;

  array.forEach(val => {
    sum += val.reduce((prev_val, current_val) => prev_val + current_val, 0);
  });

  return sum;
}

//11
export function unique_num(array) {
  let tabu_list = [];
  let frequency = [];

  array.forEach(val => {
    if(!tabu_list.includes(val)) {
      tabu_list.push(val);
      frequency.push(1);
    }
    else {
      frequency[tabu_list.indexOf(val)] += 1;
    }
  });

  let nechet_frequency_vals = [];

  tabu_list.forEach((val, index) => {
    if(frequency[index] % 2 !== 0) {
      nechet_frequency_vals.push(val);
    }
  });

  return nechet_frequency_vals;
}

//12
const newFilterElements = (arr) => {
  let filtered_array = [];

  arr.forEach(val => {
    if('age' in val && val['age'] === 23) filtered_array.push(val);
  });

  return filtered_array;
}

//13
function the_longest_elem(array) {
  let max_len = 0;
  let max_elem = '';

  array.forEach(val => {
    if(val.length > max_len) {
      max_len = val.length;
      max_elem = val;
    }
  });

  return max_elem;
}

//14
function group_by_name(array) {
  let new_arr = [];
  let name = [];
  let price = [];

  array.forEach(value => {
    if(!value['name'].includes(name)) {
      name.push(name);
      price.push(value['price']);
    }
    else {
      price[name.indexOf(value['name'])] += value['price'];
    }
  });

  name.forEach(index => {
    new_arr.push({ name: name[index], price: price[index]});
  });

  return new_arr;
}

//15
function add_numbers(num) {
  let add = true;
  let sum = num;

  while(add) {
    let temp = sum;

    while(temp > 0) {
      let digit = temp % 10;
      sum += digit;
      temp = Math.floor(temp / 10);
    }

    if(sum < 10) add = false;
  }

  return sum;
}

// 16
function shahmat() {
  let size = 8;
  let left_shift = '';
  let right_shift = '';

  for(let i = 0; i < Math.floor(size / 2); i++) {
    left_shift += '# ';
    right_shift = ' #';
  }

  if(Math.floor(size / 2) * 2 < size) {
    left_shift += '#';
    right_shift += ' ';
  }

  let new_str = '';

  for(let i = 0; i < size; i++) {
    new_str += left_shift + "\n";
    new_str += right_shift + "\n";
  }

  if(Math.floor(size / 2) * 2 < size) new_str += left_shift

}




















