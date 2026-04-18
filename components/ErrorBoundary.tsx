import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { addLog } from '../logger';

interface Props {
  children: React.ReactNode;
  onShowDebug?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    addLog(`[ErrorBoundary] ${error.message}`, 'error');
    console.error('ErrorBoundary caught:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">發生錯誤</h2>
        <p className="text-gray-600 max-w-md mb-4">
          畫面載入時發生問題，您可以嘗試重新整理頁面。
        </p>
        <pre className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded max-w-xl overflow-auto mb-4">
          {this.state.error?.message || '未知錯誤'}
        </pre>
        <div className="flex gap-2">
          <button
            onClick={this.handleReset}
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            嘗試恢復
          </button>
          <button
            onClick={this.handleReload}
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:opacity-90"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            重新整理
          </button>
          {this.props.onShowDebug && (
            <button
              onClick={this.props.onShowDebug}
              className="inline-flex items-center px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-800"
            >
              顯示除錯日誌
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
