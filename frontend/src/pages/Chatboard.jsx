import Navbar from "../components/Navbar";
import "./ChatBoard.css";

import {
  Bot,
  Send,
  Mic,
  Paperclip,
  Plus,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Volume2,
  Bell,
  MoreVertical,
} from "lucide-react";

export default function ChatBoard() {
  return (
    <div className="chat-page">

      {/* Navbar */}
       <Navbar/>

      {/* Main */}
      <div className="chat-wrapper">

        <div className="chat-card">

          {/* Header */}
          <div className="chat-header">

            <div className="mentor-info">

              <div className="mentor-icon">
                <Bot size={30} />
              </div>

              <div>
                <h2 className="mentor-title">
                  AI Interview Mentor
                </h2>

                <p className="mentor-subtitle">
                  Ask anything about DSA, DBMS, OS,
                  CN, OOPS, Java and more...
                </p>
              </div>

            </div>

            <div className="header-actions">

              <button className="new-chat-btn">
                <Plus size={18} />
                New Chat
              </button>

              <button className="icon-btn">
                <Mic size={18} />
              </button>

              <button className="icon-btn">
                <MoreVertical size={18} />
              </button>

            </div>

          </div>

          {/* Chat Body */}
          <div className="chat-body">

            <div className="today-tag">
              Today
            </div>

            {/* User Message */}
            <div className="user-message-row">

              <div className="user-message">

                <p>
                  Explain Binary Search with
                  an example and code.
                </p>

                <div className="message-time">
                  7:45 PM
                </div>

              </div>

            </div>

            {/* AI Message */}
            <div className="ai-message-row">

              <div className="ai-avatar">
                <Bot size={22} />
              </div>

              <div className="ai-content">

                <div className="ai-message">

                  <p>
                    Sure! Binary Search is an efficient
                    algorithm used to find an element in
                    a sorted array by repeatedly dividing
                    the search interval in half.
                  </p>

                  <h3 className="section-title">
                    How it works:
                  </h3>

                  <ul className="steps-list">
                    <li>Compare middle element.</li>
                    <li>If equal, return.</li>
                    <li>If smaller, go left.</li>
                    <li>If larger, go right.</li>
                  </ul>

                  <div className="divider"></div>

                  <h3 className="section-title">
                    Example
                  </h3>

                  <p>
                    Array: [2, 5, 8, 12, 16, 23, 38]
                  </p>

                  <div className="divider"></div>

                  <h3 className="section-title">
                    Code (Python)
                  </h3>

                  <pre className="code-block">
{`def binary_search(arr, target):
    left, right = 0, len(arr)-1

    while left <= right:
        mid = (left + right)//2

        if arr[mid] == target:
            return mid

        elif arr[mid] < target:
            left = mid + 1

        else:
            right = mid - 1`}
                  </pre>

                </div>

                <div className="message-actions">

                  <button>
                    <Copy size={18} />
                  </button>

                  <button>
                    <ThumbsUp size={18} />
                  </button>

                  <button>
                    <ThumbsDown size={18} />
                  </button>

                  <button>
                    <Volume2 size={18} />
                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* Footer */}
          <div className="chat-footer">

            <div className="chat-input-box">

              <button className="attach-btn">
                <Paperclip size={18} />
              </button>

              <button className="attach-btn">
                <Mic size={18} />
              </button>

              <input
                type="text"
                placeholder="Type your question..."
              />

              <button className="send-btn">
                <Send size={20} />
              </button>

            </div>

            <p className="footer-note">
              AI responses can make mistakes.
              Please verify important information.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}