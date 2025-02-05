document.addEventListener("DOMContentLoaded", function () {
    const newTaskBtn = document.getElementById('newTaskBtn');
    const ftList = document.getElementById('ft_list');
  
    // โหลดข้อมูล To-Do จาก cookie
    loadTasks();
  
    // เพิ่มรายการใหม่เมื่อคลิกปุ่ม 'New'
    newTaskBtn.addEventListener('click', function () {
      const task = prompt("Enter your new task:");
  
      if (task && task.trim() !== "") {
        addTask(task);
      }
    });
  
    // เพิ่มรายการใหม่เข้าไปใน DOM และบันทึกลงใน cookie
    function addTask(task) {
      const taskDiv = document.createElement('div');
      taskDiv.className = 'todo-item';
      taskDiv.textContent = task;
      
      // เมื่อคลิกที่ To-Do จะลบออก
      taskDiv.addEventListener('click', function () {
        if (confirm("Do you really want to remove this task?")) {
          removeTask(taskDiv);
        }
      });
  
      // เพิ่มรายการที่สร้างใหม่ไปที่ด้านบนของรายการ
      ftList.insertBefore(taskDiv, ftList.firstChild);
      
      // บันทึกลงใน cookie
      saveTasks();
    }
  
    // ลบ To-Do จาก DOM และจาก cookie
    function removeTask(taskDiv) {
      ftList.removeChild(taskDiv);
      saveTasks();
    }
  
    // บันทึกรายการ To-Do ลงใน cookie
    function saveTasks() {
      const tasks = [];
      const taskItems = ftList.getElementsByClassName('todo-item');
  
      for (let item of taskItems) {
        tasks.push(item.textContent);
      }
  
      // เก็บข้อมูล To-Do ลงใน cookie
      document.cookie = "todoList=" + JSON.stringify(tasks) + "; path=/";
    }
  
    // โหลดรายการ To-Do จาก cookie
    function loadTasks() {
      const cookies = document.cookie.split("; ");
      for (let cookie of cookies) {
        if (cookie.startsWith("todoList=")) {
          const taskList = JSON.parse(cookie.substring("todoList=".length));
          
          // สร้าง To-Do จากรายการที่เก็บใน cookie
          for (let task of taskList) {
            addTask(task);
          }
        }
      }
    }
  });
  