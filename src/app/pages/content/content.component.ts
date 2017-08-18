import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  system = {
    model: 'agents',
    type: 'physical',
    data: {
      list: [
        {
          imgUrl: '',
          url: 'a.node1test.com',
          status: 'idle',
          ip: '192.168.1.2',
          path: '/var/lib/cruise-agent',
          addResourceStatus: false,
          inputVal: '',
          resources: [
            'ubuntu'
          ]
        },
        {
          imgUrl: '',
          url: 'a.node1test.com',
          status: 'building',
          ip: '192.168.1.2',
          path: '/var/lib/cruise-agent',
          addResourceStatus: false,
          inputVal: '',
          resources: [
            'ubuntu'
          ]
        },
        {
          imgUrl: '',
          url: 'a.node1test.com',
          status: 'idle',
          ip: '192.168.1.2',
          path: '/var/lib/cruise-agent',
          addResourceStatus: false,
          inputVal: '',
          resources: [
            'ubuntu'
          ]
        },
        {
          imgUrl: '',
          url: 'a.node1test.com',
          status: 'building',
          ip: '192.168.1.2',
          path: '/var/lib/cruise-agent',
          addResourceStatus: false,
          inputVal: '',
          resources: [
            'ubuntu'
          ]
        }
      ],
      summary: [
        {
          name: 'building',
          num: '2'
        },
        {
          name: 'idle',
          num: '2'
        }
      ],
      history: [
        {
          id: '1',
          name: 'abcdef1/Acceptance'
        },
        {
          id: '1',
          name: 'abcdef2/Acceptance'
        },
        {
          id: '1',
          name: 'abcdef3/Acceptance'
        }
      ]
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * tab切换
   * @param tabName
   */
  cutTabs(tabName) {
    this.system.model = tabName;
  }

  /**
   * 类型切换
   * @param typeName
   */
  cutType(typeName) {
    this.system.type = typeName;
  }

  /**
   * 删除资源
   * @param itemIndex 主机下标
   * @param resourceIndex 资源下标
   */
  removeResource(itemIndex, resourceIndex) {
    this.system.data.list[itemIndex].resources.splice(resourceIndex, 1);
  }

  /**
   * 显示弹窗
   * @param itemIndex
   */
  showPop(itemIndex) {
    this.system.data.list.forEach(function (item) {
      item.addResourceStatus = false;
    })
    this.system.data.list[itemIndex].addResourceStatus = true;
  }

  /**
   * 添加resource
   * @param itemIndex
   */
  addResource(itemIndex) {
    const val = this.system.data.list[itemIndex].inputVal;
    const valArray = val.split(',');
    this.system.data.list[itemIndex].resources = this.system.data.list[itemIndex].resources.concat(valArray);
    this.system.data.list[itemIndex].inputVal = '';
    this.system.data.list[itemIndex].addResourceStatus = false;
  }

  /**
   * 关闭弹窗
   * @param itemIndex
   */
  closePop(itemIndex) {
    this.system.data.list[itemIndex].addResourceStatus = false;
  }
}

