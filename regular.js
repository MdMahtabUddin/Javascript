// Lws 46

// আমরা যখন  কোন কিছু খোঁজ করি তখন মুলত রেগুলার এক্সপ্রেশন ব্যবহার করা হয় । 

// কোন টেক্সট খুঁজে বের করা বা রিপ্লেস করার জন্য ব্যবহার করা হয় । 

  /bangladesh/i
// এখানে i হচ্ছে কেইস ইন্সেন্সেটিভ ছোট বা বড় হাতের হলেও সে খুঁজে নিবে 

// স্ট্রিং মেথড  search এবং replace এই দুটো ফাংশন ব্যবহার করতে হবে । 

let country ='welcome to Bangladesh';
console.log(country.search(/bangladesh/i));

// using replace
console.log(country.replace('Bangladesh','Germany'))



