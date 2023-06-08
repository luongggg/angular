import { Component } from '@angular/core';
import { authSeviceComponent } from '../services/auth.services';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  errorMessage: string='';
  successMessage: string='';
  email: string='';
  oldPassword: string='';
  newPassword: string='';

  constructor(private authSeviceComponent: authSeviceComponent) { }

  changePassword() {
    if (this.email && this.newPassword) {
      const result = this.authSeviceComponent.changePassword(this.email, this.oldPassword,this.newPassword);

      if (result) {
        // Hiển thị thông báo thành công hoặc thực hiện các hành động bổ sung
        this.successMessage = 'Mật khẩu đã được thay đổi thành công';
        
      } else {
        // Xử lý khi mật khẩu cũ không chính xác hoặc mật khẩu mới không hợp lệ
        this.errorMessage = 'Mật khẩu cũ không chính xác hoặc mật khẩu mới không hợp lệ';
      }
    } else {
      // Xử lý khi thông tin email hoặc mật khẩu mới không được nhập
      this.errorMessage = 'Vui lòng nhập đầy đủ thông tin';
    }
    }
  }


