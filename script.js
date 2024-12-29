// script.js

// تنشيط نموذج تسجيل الحساب
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج بشكل طبيعي

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // هنا يمكن حفظ بيانات المستخدم في قاعدة بيانات، مثل Firebase أو أي قاعدة بيانات أخرى
    // سيتم تسجيل البيانات باستخدام JavaScript فقط لتوضيح الفكرة

    alert(تم إنشاء حسابك بنجاح! مرحبًا بك، ${username});
});

// تنشيط نموذج تسجيل الدخول
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج بشكل طبيعي

    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;

    // تحقق من البيانات المدخلة (هنا يمكنك إجراء التحقق من قاعدة البيانات)
    alert(تم تسجيل الدخول بنجاح! مرحبًا بك، ${loginUsername});
});