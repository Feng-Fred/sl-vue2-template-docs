import { defineComponent } from "vue";
import { Icon, Typography } from "sl-vue2-template";
import { type IconName } from "sl-vue2-template/lib/cjs/types/Icon/Icon";
import "./styles.scss";

const { Text } = Typography;

export default defineComponent({
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onClose() {
      this.show = !this.show;
    },
  },
  render() {
    return (
      <div>
        <ul>
          {List.map((item) => {
            return (
              <li>
                <Icon name={item} />
                <Text>{item}</Text>
              </li>
            );
          })}
        </ul>
      </div>
    );
  },
});

const List: IconName[] = [
  "Prompt",
  "Prompt Filling",
  "Refresh",
  "Picture",
  "Search",
  "Share",
  "Scanning",
  "Security",
  "Sign Out",
  "Select",
  "Select Circle",
  "Select Bold",
  "Select Filling",
  "Select Filling Circle",
  "Select Square",
  "Stop",
  "Setting",
  "Survey",
  "Task",
  "Clock",
  "Phone",
  "Unlock",
  "User",
  "Upload",
  "Work",
  "Warning",
  "Zoom In",
  "Zoom Out",
  "Add Bold",
  "Arrow Left Bold",
  "Arrow Up Bold",
  "Close Bold",
  "Arrow Down Bold",
  "Minus Bold",
  "Arrow Right Bold",
  "Arrow Up Filling",
  "Arrow Down Filling",
  "Arrow Left Filling",
  "Arrow Right Filling",
  "Caps Lock Filling",
  "Comment Filling",
  "Clock Filling",
  "Close Filling",
  "Minus Filling",
  "Favorite",
  "Favorite Filling",
  "Help Filling",
  "History Filling",
  "Email Filling",
  "Edit Filling",
  "Notification Filling",
  "User Filling",
  "Setting Filling",
  "Work Filling",
  "Warning Filling",
  "Folder Filling",
  "Map Filling",
  "Sort",
  "Add",
  "Add Circle",
  "Arrow Up Circle",
  "Arrow Right Circle",
  "Delete",
  "Arrow Down",
  "Arrow Right",
  "Browse",
  "Browse Close",
  "Bottom",
  "Back",
  "Bad",
  "Arrow Double Left",
  "Arrow Left Circle",
  "Arrow Double Right",
  "Caps Lock",
  "Camera",
  "Chart Bar",
  "Attachment",
  "Code",
  "Close",
  "Calendar",
  "Comment",
  "Complete",
  "Customer Service",
  "Direction Down",
  "Direction Down Circle",
  "Direction Right",
  "Direction Up",
  "Direction Left",
  "Download",
  "Export",
  "Edit",
  "Email",
  "Close Circle",
  "File Delete",
  "File Add",
  "Fabulous",
  "File",
  "Folder",
  "Good",
  "Home",
  "History",
  "Folder Open",
  "Forward",
  "Import",
  "Link",
  "Lock",
  "Map",
  "Menu",
  "Loading",
  "Help",
  "Minus Circle",
  "Modular",
  "Notification",
  "More",
  "Play",
  "Print",
  "Minus",
  "PDF",
];
